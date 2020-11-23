const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://rino.world/resume');
  await page.pdf({ path: 'febriano-resume.pdf', format: 'A4',margin:{top:"2cm",bottom:"2cm"} });
  await browser.close();
})();