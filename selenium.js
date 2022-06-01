const { remote } = require('webdriverio');

(async () => {
  const browser = await remote({
    capabilities: {
      browserName: 'chrome'
    },
    hostname: "selenium-ch",
    port: 4444
  })
  await browser.url('https://webdriver.io')
  const apiLink = await browser.$('=API')
  await apiLink.click()
  await browser.saveScreenshot('./screenshot.png')
  await browser.deleteSession()
})()
