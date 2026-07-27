import { chromium } from 'playwright';
import { spawn } from 'child_process';
import { mkdir } from 'fs/promises';
import { join } from 'path';

const outDir = join('R:\\My software\\SaudiToolsHub\\saudi-calc-hub\\public\\preview');
await mkdir(outDir, { recursive: true });

const server = spawn('npx.cmd', ['next', 'dev', '--port', '3001'], {
  cwd: 'R:\\My software\\SaudiToolsHub\\saudi-calc-hub',
  stdio: 'pipe',
  shell: true,
});

await new Promise((r) => setTimeout(r, 8000));

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const urls = [
  ['en-eosb', 'http://localhost:3001/en/eosb-calculator'],
  ['ar-eosb', 'http://localhost:3001/ar/eosb-calculator'],
];

for (const [name, url] of urls) {
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: join(outDir, `${name}.png`), fullPage: true });
    console.log(`✓ ${name}.png`);
  } catch (e) {
    console.log(`✗ ${name}: ${e.message}`);
  }
}

await browser.close();
server.kill();
console.log('Done');
