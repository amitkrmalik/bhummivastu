# SEO rating and readability audit

Generated from the rendered `dist/` output after `npm run build`.

This is a transparent repository audit, not a Google ranking score. Search visibility also depends on indexing, backlinks, competition, Core Web Vitals, Google Business Profile signals, and query intent.

## Summary

- **SEO readiness score:** 96/100 using the rubric below.
- **Indexable rendered pages measured:** 24.
- **Average Flesch Reading Ease:** 30.9 (Difficult).
- **Homepage Flesch Reading Ease:** 27.6 (Very difficult).
- **Primary keyword coverage on the homepage:** 6/6.
- **Images with non-empty alt text:** 39/39 (100%).

## Implemented in this branch

- Reworked page titles around one search intent each, with natural use of Vastu, Astrology, Astro-Vastu, Bangalore, India, and Minu Saini.
- Rewrote the blog landing metadata and removed the remaining AstroWind example copy from its rendered introduction.
- Added Bangalore, Karnataka, and India service areas plus explicit service types, founder, and topic coverage to the existing privacy-safe ProfessionalService JSON-LD.
- Added a reproducible `npm run seo:audit` command that measures rendered metadata, keyword coverage, image alt text, and Flesch Reading Ease.

### Primary keyword occurrences on the homepage

| Keyword     | Occurrences |
| ----------- | ----------: |
| Vastu       |          36 |
| Astrology   |          14 |
| Astro-Vastu |           4 |
| Bangalore   |           7 |
| India       |          18 |
| Minu Saini  |           7 |

## Page-level measurements

| Page                                                | Title chars | Description chars | H1s | Flesch | Reading band     |
| --------------------------------------------------- | ----------: | ----------------: | --: | -----: | ---------------- |
| `/`                                                 |          43 |               160 |   1 |   27.6 | Very difficult   |
| `/about`                                            |          50 |               133 |   1 |   25.9 | Very difficult   |
| `/blog`                                             |          36 |               143 |   1 |   54.0 | Fairly difficult |
| `/category/vastu-tips`                              |          33 |               140 |   1 |   54.0 | Fairly difficult |
| `/certifications`                                   |          59 |               127 |   1 |   -0.0 | Very difficult   |
| `/contact`                                          |          65 |               137 |   1 |   56.1 | Fairly difficult |
| `/from-bickering-to-stronger-family-bonds`          |          64 |               138 |   1 |   44.1 | Difficult        |
| `/is-your-home-helping-or-hurting-your-finances`    |          65 |               142 |   1 |   49.5 | Difficult        |
| `/media`                                            |          51 |               136 |   1 |   24.8 | Very difficult   |
| `/pricing`                                          |          59 |               127 |   1 |   47.2 | Difficult        |
| `/privacy`                                          |          28 |               124 |   1 |   32.6 | Difficult        |
| `/services`                                         |          60 |               141 |   1 |   29.9 | Very difficult   |
| `/services/astro-vastu`                             |          58 |               137 |   1 |   22.7 | Very difficult   |
| `/services/astro-vastu-commercial`                  |          56 |               144 |   1 |   15.2 | Very difficult   |
| `/services/commercial-vastu`                        |          54 |               134 |   1 |   21.2 | Very difficult   |
| `/services/industrial-vastu`                        |          52 |               124 |   1 |    9.5 | Very difficult   |
| `/services/it-career-astrology`                     |          52 |               123 |   1 |   17.3 | Very difficult   |
| `/services/personal-life-astrology`                 |          56 |               137 |   1 |   20.8 | Very difficult   |
| `/services/prashna-kundali`                         |          51 |               133 |   1 |   57.5 | Fairly difficult |
| `/services/residential-vastu`                       |          53 |               124 |   1 |   23.5 | Very difficult   |
| `/social`                                           |          58 |               120 |   1 |   12.8 | Very difficult   |
| `/supercharge-your-studies-vastu-tips-for-students` |          62 |               141 |   1 |   36.5 | Difficult        |
| `/terms`                                            |          34 |               124 |   1 |   29.3 | Very difficult   |
| `/testimonials`                                     |          52 |               136 |   1 |   30.5 | Difficult        |

## Score rubric

The score weights rendered technical and on-page signals: title length quality (15), description length quality (15), canonical coverage (10), complete Open Graph coverage (15), exactly one H1 per page (10), image alt-text coverage (10), homepage coverage of the six requested primary keywords (15), and readable main-content coverage (10). Title quality means 30–65 characters; description quality means 120–170 characters; readability means Flesch 50 or above.

## Flesch Reading Ease interpretation

Flesch Reading Ease is a readability estimate from sentence length and syllable density. Higher is easier to read. It is useful for finding dense copy, but it is not an SEO ranking factor and should not be maximised at the expense of accuracy or appropriate service terminology.

For this site, aim for **50–70 on service pages** and **60–75 on introductory/FAQ copy**. Improve low-scoring pages by using one idea per sentence, active voice, short paragraphs, descriptive subheadings, bullets for service inclusions, and plain explanations before specialist terms such as _Vastu Shastra_, _Kundali_, and _Astro-Vastu_.

## Recommended improvements

1. Keep each title focused on one search intent: service + location or audience + brand. Avoid repeating “Vastu Acharya Minu Saini” twice in one title.
2. Keep descriptions specific and readable at roughly 140–160 characters, with a natural service and location phrase plus a clear value proposition.
3. Expand the blog with genuinely useful Vastu and Astrology articles that answer specific Bangalore and India search questions, then link each article to the relevant service page.
4. Use the page table after each content change to target pages below 50 Flesch without removing the keywords users need.
5. Treat “Vastu”, “Astrology”, “Astro-Vastu”, “Bangalore”, “India”, and “Minu Saini” as topic signals, not a keyword-stuffing target. Relevance, helpfulness, internal linking, and verifiable claims matter more than raw repetition.

## Reproduce

`npm run build && npm run seo:audit`
