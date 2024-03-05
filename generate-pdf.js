const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  const pages = ['curriculum_donini_manuel', 'curriculum_donini_manuel_en'];

  for (let i in pages) {

    await page.goto(`file://${__dirname}/${pages[i]}.html`, { waitUntil: 'networkidle0' });

    await page.emulateMediaType('print');

    await page.pdf({
      path: `${pages[i]}.pdf`,
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
  }

  await browser.close();
})();