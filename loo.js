const puppeteer = require('puppeteer');

async function getPic() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com');
  var ele = await page.waitForXPath("//input[@name='q']")
  await ele.type("qa engineering")
  await page.setViewport({
    width: 1800,
    height: 900,
  });
  await page.screenshot({path: 'google.png'});

  await browser.close();
}

getPic();