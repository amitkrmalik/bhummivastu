import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const html = readFileSync(resolve('dist/index.html'), 'utf8');

const failures = [];

if (
  /(property="og:image"[^>]+content="[^"]*\/_astro\/default\.|content="[^"]*\/_astro\/default\.[^"]*"[^>]+property="og:image")/.test(
    html
  )
) {
  failures.push('Homepage share image still points to the AstroWind default preview asset.');
}

if (/AstroWind|Astro 5\.0|Free template for creating websites/i.test(html)) {
  failures.push('Built homepage HTML still contains AstroWind template share content.');
}

const schemaMatch = html.match(/<script type="application\/ld\+json">(.+?)<\/script>/);
if (!schemaMatch) {
  failures.push('Could not find homepage JSON-LD schema.');
} else {
  const schema = JSON.parse(schemaMatch[1]);
  if (schema.address?.streetAddress) {
    failures.push('Homepage JSON-LD still exposes a street address.');
  }
  if (schema.address?.postalCode) {
    failures.push('Homepage JSON-LD still exposes a postal code.');
  }
  if (schema.geo) {
    failures.push('Homepage JSON-LD still exposes exact geo coordinates.');
  }
}

if (failures.length > 0) {
  console.error('Share metadata checks failed:\n');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log('Share metadata checks passed.');
