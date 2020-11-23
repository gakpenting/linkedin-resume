const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://linkedin-resume.spiritbro.vercel.app/resume');
  await page.pdf({ path: 'febriano-resume.pdf', format: 'A4',margin:{top:"2cm",bottom:"2cm"} });
  await browser.close();
})();