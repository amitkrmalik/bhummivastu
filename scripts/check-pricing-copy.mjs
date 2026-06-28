import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const checks = [
  {
    file: 'dist/services/residential-vastu/index.html',
    mustInclude: ['₹11,000 minimum', '₹10/SFT'],
    mustExclude: ['discount', '₹10,000 minimum', '₹20/SFT'],
  },
  {
    file: 'dist/services/astro-vastu/index.html',
    mustInclude: ['For Homes: ', '₹18,000 minimum', '₹25/SFT'],
    mustExclude: ['discount', '₹15,000 minimum', '₹30/SFT'],
  },
  {
    file: 'dist/services/commercial-vastu/index.html',
    mustInclude: ['₹25,000 minimum', '₹50/SFT'],
    mustExclude: ['discount', '₹10,000 minimum'],
  },
  {
    file: 'dist/services/industrial-vastu/index.html',
    mustInclude: ['₹25,000 minimum', '₹50/SFT'],
    mustExclude: ['discount', '₹10,000 minimum'],
  },
  {
    file: 'dist/index.html',
    mustInclude: ['₹11,000 minimum or ₹10/SFT', '₹25,000 minimum or ₹50/SFT', '₹18,000 minimum or ₹25/SFT'],
    mustExclude: ['discount', '₹10,000 minimum or ₹20/SFT', '₹15,000 minimum or ₹30/SFT'],
  },
  {
    file: 'dist/services/index.html',
    mustInclude: [
      'Starting from ₹11,000 minimum or ₹10/SFT.',
      'Starting from ₹25,000 minimum or ₹50/SFT.',
      'Starting from ₹18,000 minimum or ₹25/SFT.',
    ],
    mustExclude: ['discount', 'Starting from ₹10,000 minimum or ₹20/SFT.', 'Starting from ₹15,000 minimum or ₹30/SFT.'],
  },
  {
    file: 'dist/pricing/index.html',
    mustInclude: ['₹11,000 minimum', '₹18,000 minimum', '₹25,000 minimum', '₹10/SFT', '₹25/SFT', '₹50/SFT'],
    mustExclude: ['discount', '₹10,000 minimum', '₹15,000 minimum', '₹20/SFT', '₹30/SFT'],
  },
  {
    file: 'dist/contact/index.html',
    mustInclude: ['Starting from ₹11,000 minimum.', 'Starting from ₹25,000 minimum.', 'Starting from ₹18,000 minimum.'],
    mustExclude: ['discount', 'Starting from ₹10,000 minimum.', 'Starting from ₹15,000 minimum.'],
  },
  {
    file: 'dist/services/astro-vastu-commercial/index.html',
    mustInclude: ['₹25,000', '₹50/SFT'],
    mustExclude: ['discount'],
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
