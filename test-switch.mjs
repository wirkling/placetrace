import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1400, height: 800 });

console.log('Testing language switcher design...');
await page.goto('https://placetrace.com', { waitUntil: 'networkidle0', timeout: 30000 });
await page.waitForSelector('header');

// Take screenshot of the header with new toggle
await page.screenshot({ path: 'screenshot-toggle.png', clip: { x: 0, y: 0, width: 1400, height: 120 } });
console.log('Screenshot saved: screenshot-toggle.png');

// Check if both DE and EN are visible
const toggleInfo = await page.evaluate(() => {
  const buttons = document.querySelectorAll('header button');
  const texts = Array.from(buttons).map(b => b.textContent?.trim());
  return { buttons: texts, hasDE: texts.includes('DE'), hasEN: texts.includes('EN') };
});

console.log('Toggle buttons:', toggleInfo);

if (toggleInfo.hasDE && toggleInfo.hasEN) {
  console.log('✅ New toggle design deployed with DE and EN visible');
} else {
  console.log('❌ Still showing old design');
}

await browser.close();
