#!/usr/bin/env node
// Usage:
//   node scripts/screenshot.mjs          # screenshot all slides
//   node scripts/screenshot.mjs 1,3,5    # specific slides
//   node scripts/screenshot.mjs --range 1-10
//
// Requires: `npm run dev` running on http://localhost:3030

import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const BASE = process.env.SLIDEV_URL ?? 'http://localhost:3030';
const OUT = 'screenshots';

function parseArgs(argv) {
  const args = argv.slice(2);
  if (args[0] === '--range' && args[1]) {
    const [a, b] = args[1].split('-').map(Number);
    return Array.from({ length: b - a + 1 }, (_, i) => a + i);
  }
  if (args[0]) return args[0].split(',').map(Number);
  return null;
}

async function countSlides(page) {
  await page.goto(`${BASE}/1`, { waitUntil: 'networkidle' });
  return page.evaluate(() => {
    const total = document.querySelector('[class*="slidev-page-indicator"]');
    if (!total) return 30;
    const m = total.textContent?.match(/\d+$/);
    return m ? parseInt(m[0], 10) : 30;
  });
}

async function main() {
  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

  let slides = parseArgs(process.argv);
  if (!slides) {
    const n = await countSlides(page);
    slides = Array.from({ length: n }, (_, i) => i + 1);
  }

  for (const n of slides) {
    const url = `${BASE}/${n}?print`;
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(400);
    const file = join(OUT, `slide-${String(n).padStart(2, '0')}.png`);
    await page.screenshot({ path: file, fullPage: false });
    console.log(`✓ ${file}`);
  }

  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
