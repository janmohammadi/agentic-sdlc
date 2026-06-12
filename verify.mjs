// Renders the page headlessly and screenshots the three views.
// Borrows playwright from the sibling presentation project — dev-time only.
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { mkdirSync } from 'fs';

const require = createRequire('C:/Repos/ideas-pocs/presentation/claude/');
const { chromium } = require('playwright');

const __dirname = dirname(fileURLToPath(import.meta.url));
mkdirSync(resolve(__dirname, 'screenshots'), { recursive: true });
const fileUrl = `file:///${resolve(__dirname, 'index.html').replace(/\\/g, '/')}`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1500, height: 950 } });

const errors = [];
page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
page.on('pageerror', (e) => errors.push(String(e)));

await page.goto(fileUrl, { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(1800);
await page.screenshot({ path: resolve(__dirname, 'screenshots/01-home.png') });

await page.goto(fileUrl + '#/stage/development', { waitUntil: 'load' });
await page.waitForTimeout(800);
await page.screenshot({ path: resolve(__dirname, 'screenshots/02-stage.png') });

// expand the first two nodes in the first facet
await page.evaluate(() => {
  document.querySelectorAll('.facet[data-facet="opportunities"] .node-row').forEach((b, i) => i < 2 && b.click());
});
await page.waitForTimeout(500);
await page.screenshot({ path: resolve(__dirname, 'screenshots/03-stage-expanded.png') });

await page.goto(fileUrl + '#/principles', { waitUntil: 'load' });
await page.waitForTimeout(800);
await page.screenshot({ path: resolve(__dirname, 'screenshots/04-principles.png') });

console.log(errors.length ? 'CONSOLE/PAGE ERRORS:\n' + errors.join('\n') : 'No console errors.');
await browser.close();
