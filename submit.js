const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://contractorsinsurancereview.com/ExampleForm/');



  await page.type('#name', 'Daniel')
  await page.type('#email', 'mason.contact@gmail.com')
  await page.type('#phone', '0528895183')
  await page.type('#company', 'IBM')


  await page.select('#employees', '51-500')
  
  await page.screenshot({path: 'example.png'});

  const clickme = await page.waitForXPath('//html/body/div/div[2]/div[2]/div/form/p[6]/button')
  await clickme.click();

  await page.waitFor(5000)
    
  
  console.log('Informaiton Submitted')


  await browser.close();
})();