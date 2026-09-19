import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');
const reportPath = join(root, 'seo_raiting.md');
const primaryKeywords = ['Vastu', 'Astrology', 'Astro-Vastu', 'Bangalore', 'India', 'Minu Saini'];

function collectHtml(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? collectHtml(path) : entry.name.endsWith('.html') ? [path] : [];
  });
}

function tags(html, name) {
  return [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'gi'))].map((match) => match[0]);
}

function attribute(tag, name) {
  const match = tag.match(new RegExp(`\\b${name}\\s*=\\s*["']([^"']*)["']`, 'i'));
  return match?.[1] ?? '';
}

function metaValue(html, key, value) {
  return (
    tags(html, 'meta')
      .map((tag) => ({ key: attribute(tag, key), content: attribute(tag, 'content') }))
      .find((meta) => meta.key.toLowerCase() === value.toLowerCase())?.content ?? ''
  );
}

function linkValue(html, rel) {
  const tag = tags(html, 'link').find((item) => attribute(item, 'rel').toLowerCase() === rel);
  return tag ? attribute(tag, 'href') : '';
}

function visibleText(html) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? html;
  return main
    .replace(/<(script|style|noscript|svg|header|footer|nav)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#39;|&#x27;/gi, "'")
    .replace(/&quot;/gi, '"')
    .replace(/&amp;/gi, '&')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/\s+/g, ' ')
    .trim();
}

function words(text) {
  return text.match(/[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)?/gu) ?? [];
}

function syllables(word) {
  const normalized = word.toLowerCase().replace(/[^a-z]/g, '');
  if (!normalized) return 0;
  if (normalized.length <= 3) return 1;
  const groups = normalized.match(/[aeiouy]+/g)?.length ?? 1;
  const silentE = normalized.endsWith('e') && !normalized.endsWith('le') ? 1 : 0;
  const trailingEd = normalized.endsWith('ed') && !/[td]ed$/.test(normalized) ? 1 : 0;
  return Math.max(1, groups - silentE - trailingEd);
}

function flesch(text) {
  const list = words(text);
  if (!list.length) return null;
  const sentenceCount = Math.max(1, (text.match(/[.!?]+(?=\s|$)/g) ?? []).length);
  const syllableCount = list.reduce((total, word) => total + syllables(word), 0);
  return 206.835 - 1.015 * (list.length / sentenceCount) - 84.6 * (syllableCount / list.length);
}

function round(value) {
  return value == null ? '—' : value.toFixed(1);
}

function band(score) {
  if (score == null) return 'No text';
  if (score >= 90) return 'Very easy';
  if (score >= 80) return 'Easy';
  if (score >= 70) return 'Fairly easy';
  if (score >= 60) return 'Plain English';
  if (score >= 50) return 'Fairly difficult';
  if (score >= 30) return 'Difficult';
  return 'Very difficult';
}

function pagePath(file) {
  const value = relative(dist, file).split(sep).join('/');
  return value === 'index.html' ? '/' : `/${value.replace(/\/index\.html$/, '').replace(/\.html$/, '')}`;
}

const pages = collectHtml(dist)
  .filter((file) => !file.endsWith('/404.html'))
  .map((file) => {
    const html = readFileSync(file, 'utf8');
    const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? '';
    const description = metaValue(html, 'name', 'description');
    const robots = metaValue(html, 'name', 'robots');
    const text = visibleText(html);
    const imageTags = tags(html, 'img');
    const imagesWithAlt = imageTags.filter((tag) => attribute(tag, 'alt').trim()).length;
    return {
      path: pagePath(file),
      title,
      description,
      robots,
      canonical: linkValue(html, 'canonical'),
      ogTitle: metaValue(html, 'property', 'og:title'),
      ogDescription: metaValue(html, 'property', 'og:description'),
      ogImage: metaValue(html, 'property', 'og:image'),
      h1Count: (html.match(/<h1\b/gi) ?? []).length,
      imageCount: imageTags.length,
      imagesWithAlt,
      text,
      flesch: flesch(text),
      indexable: !/\bnoindex\b/i.test(robots),
    };
  })
  .filter((page) => page.indexable);

const home = pages.find((page) => page.path === '/') ?? pages[0];
const averageFlesch = pages.reduce((sum, page) => sum + (page.flesch ?? 0), 0) / pages.length;
const allImages = pages.reduce((sum, page) => sum + page.imageCount, 0);
const imagesWithAlt = pages.reduce((sum, page) => sum + page.imagesWithAlt, 0);
const keywordCounts = Object.fromEntries(
  primaryKeywords.map((keyword) => [
    keyword,
    (home?.text.match(new RegExp(keyword.replace('-', '[ -]'), 'gi')) ?? []).length,
  ])
);

const checks = {
  titles: pages.filter((page) => page.title.length >= 30 && page.title.length <= 65).length / pages.length,
  descriptions:
    pages.filter((page) => page.description.length >= 120 && page.description.length <= 170).length / pages.length,
  canonicals: pages.filter((page) => page.canonical).length / pages.length,
  openGraph: pages.filter((page) => page.ogTitle && page.ogDescription && page.ogImage).length / pages.length,
  oneH1: pages.filter((page) => page.h1Count === 1).length / pages.length,
  imageAlt: allImages ? imagesWithAlt / allImages : 1,
  keywordCoverage: primaryKeywords.filter((keyword) => keywordCounts[keyword] > 0).length / primaryKeywords.length,
  readable: pages.filter((page) => (page.flesch ?? 0) >= 50).length / pages.length,
};

const seoScore = Math.round(
  15 * checks.titles +
    15 * checks.descriptions +
    10 * checks.canonicals +
    15 * checks.openGraph +
    15 * checks.oneH1 +
    10 * checks.imageAlt +
    15 * checks.keywordCoverage +
    10 * checks.readable
);

const pageRows = [...pages].sort((a, b) => a.path.localeCompare(b.path));
const report = `# SEO rating and readability audit

Generated from the rendered \`dist/\` output after \`npm run build\`.

This is a transparent repository audit, not a Google ranking score. Search visibility also depends on indexing, backlinks, competition, Core Web Vitals, Google Business Profile signals, and query intent.

## Summary

- **SEO readiness score:** ${seoScore}/100 using the rubric below.
- **Indexable rendered pages measured:** ${pages.length}.
- **Average Flesch Reading Ease:** ${round(averageFlesch)} (${band(averageFlesch)}).
- **Homepage Flesch Reading Ease:** ${round(home?.flesch)} (${band(home?.flesch)}).
- **Primary keyword coverage on the homepage:** ${Object.values(keywordCounts).filter(Boolean).length}/${primaryKeywords.length}.
- **Images with non-empty alt text:** ${imagesWithAlt}/${allImages} (${allImages ? Math.round((imagesWithAlt / allImages) * 100) : 100}%).

## Implemented in this branch

- Reworked page titles around one search intent each, with natural use of Vastu, Astrology, Astro-Vastu, Bangalore, India, and Minu Saini.
- Rewrote the blog landing metadata and removed the remaining AstroWind example copy from its rendered introduction.
- Added Bangalore, Karnataka, and India service areas plus explicit service types, founder, and topic coverage to the existing privacy-safe ProfessionalService JSON-LD.
- Added a reproducible \`npm run seo:audit\` command that measures rendered metadata, keyword coverage, image alt text, and Flesch Reading Ease.

### Primary keyword occurrences on the homepage

| Keyword | Occurrences |
| --- | ---: |
${primaryKeywords.map((keyword) => `| ${keyword} | ${keywordCounts[keyword]} |`).join('\n')}

## Page-level measurements

| Page | Title chars | Description chars | H1s | Flesch | Reading band |
| --- | ---: | ---: | ---: | ---: | --- |
${pageRows.map((page) => `| \`${page.path}\` | ${page.title.length} | ${page.description.length} | ${page.h1Count} | ${round(page.flesch)} | ${band(page.flesch)} |`).join('\n')}

## Score rubric

The score weights rendered technical and on-page signals: title length quality (15), description length quality (15), canonical coverage (10), complete Open Graph coverage (15), exactly one H1 per page (10), image alt-text coverage (10), homepage coverage of the six requested primary keywords (15), and readable main-content coverage (10). Title quality means 30–65 characters; description quality means 120–170 characters; readability means Flesch 50 or above.

## Flesch Reading Ease interpretation

Flesch Reading Ease is a readability estimate from sentence length and syllable density. Higher is easier to read. It is useful for finding dense copy, but it is not an SEO ranking factor and should not be maximised at the expense of accuracy or appropriate service terminology.

For this site, aim for **50–70 on service pages** and **60–75 on introductory/FAQ copy**. Improve low-scoring pages by using one idea per sentence, active voice, short paragraphs, descriptive subheadings, bullets for service inclusions, and plain explanations before specialist terms such as *Vastu Shastra*, *Kundali*, and *Astro-Vastu*.

## Recommended improvements

1. Keep each title focused on one search intent: service + location or audience + brand. Avoid repeating “Vastu Acharya Minu Saini” twice in one title.
2. Keep descriptions specific and readable at roughly 140–160 characters, with a natural service and location phrase plus a clear value proposition.
3. Expand the blog with genuinely useful Vastu and Astrology articles that answer specific Bangalore and India search questions, then link each article to the relevant service page.
4. Use the page table after each content change to target pages below 50 Flesch without removing the keywords users need.
5. Treat “Vastu”, “Astrology”, “Astro-Vastu”, “Bangalore”, “India”, and “Minu Saini” as topic signals, not a keyword-stuffing target. Relevance, helpfulness, internal linking, and verifiable claims matter more than raw repetition.

## Reproduce

\`npm run build && npm run seo:audit\`
`;

writeFileSync(reportPath, report);
console.log(report);
