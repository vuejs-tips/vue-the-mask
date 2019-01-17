const puppeteer = require('puppeteer')
;(async () => {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()

  // Define a window.onCustomEvent function on the page.
  page.on('console', msg => console.log(msg.text()))

  await page.exposeFunction('onCustomEvent', e => {
    console.log(`${e.type} fired`, e.detail || '')
  })

  /**
   * Attach an event listener to page to capture a custom event on page load/navigation.
   * @param {string} type Event name.
   * @return {!Promise}
   */
  function listenFor(type) {
    return page.evaluateOnNewDocument(type => {
      document.addEventListener(type, e => {
        window.onCustomEvent({ type, detail: e.detail })
      })
    }, type)
  }

  await listenFor('app-ready') // Listen for "app-ready" custom event on page load.

  await page.goto('http://localhost:5000/test/', {
    waitUntil: 'networkidle2'
  })

  await page.type('#input', '0123')
  await page.keyboard.press('ArrowLeft')
  await page.keyboard.press('ArrowLeft')
  await page.keyboard.press('Backspace')
  await page.keyboard.press('Backspace')
  await page.type('#input', '98')
  await page.$eval('#input', input =>
    console.log(input.value, input.selectionEnd)
  )
  await browser.close()
})()
