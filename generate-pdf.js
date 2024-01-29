const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  await page.goto(`file://${__dirname}/curriculum_donini_manuel.html`, { waitUntil: 'networkidle0' });

  await page.emulateMediaType('print');

  await page.pdf({
    path: 'curriculum_donini_manuel.pdf',
    format: 'A4',
    landscape: false,
    printBackground: true,
    margin: {
      top: '1cm',
      bottom: '1cm',
      left: '1cm',
      right: '1cm',
    }
  });

  await browser.close();
})();