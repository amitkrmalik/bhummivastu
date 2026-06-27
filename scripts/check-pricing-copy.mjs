import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const checks = [
  {
    file: 'dist/services/residential-vastu/index.html',
    mustInclude: ['₹10,000 minimum', '₹20/SFT (50% discount available)'],
    mustExclude: ['₹5,000 flat fee'],
  },
  {
    file: 'dist/services/astro-vastu/index.html',
    mustInclude: ['For Homes: ', '₹15,000', '₹30/SFT (50% discount available)'],
    mustExclude: [
      'For Homes: </span> <span class="font-bold text-amber-800 dark:text-amber-200 text-base">₹10,000</span>',
    ],
  },
  {
    file: 'dist/index.html',
    mustInclude: ['₹10,000 minimum or ₹20/SFT (50% off)', '₹15,000 minimum or ₹30/SFT (50% off)'],
    mustExclude: ['₹5,000 or ₹20/SFT (50% off)', '₹10,000 or ₹30/SFT (50% off)'],
  },
  {
    file: 'dist/services/index.html',
    mustInclude: ['Starting from ₹10,000 minimum or ₹20/SFT.', 'Starting from ₹15,000 minimum or ₹30/SFT.'],
    mustExclude: ['Starting from ₹5,000 or ₹20/SFT.', 'Starting from ₹5,000 or ₹20/SFT.'],
  },
  {
    file: 'dist/pricing/index.html',
    mustInclude: ['₹10,000 minimum', '₹15,000 minimum'],
    mustExclude: ['₹5,000 flat fee', '₹10,000 flat fee'],
  },
  {
    file: 'dist/contact/index.html',
    mustInclude: ['Starting from ₹10,000 minimum.', 'Starting from ₹15,000 minimum.'],
    mustExclude: ['Starting from ₹5,000.'],
  },
];

const failures = [];

for (const check of checks) {
  const html = readFileSync(resolve(check.file), 'utf8');

  for (const expected of check.mustInclude) {
    if (!html.includes(expected)) {
      failures.push(`${check.file} is missing expected copy: ${expected}`);
    }
  }

  for (const unexpected of check.mustExclude) {
    if (html.includes(unexpected)) {
      failures.push(`${check.file} still includes outdated copy: ${unexpected}`);
    }
  }
}

if (failures.length > 0) {
  console.error('Pricing copy checks failed:\n');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log('Pricing copy checks passed.');
