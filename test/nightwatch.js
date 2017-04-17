function assertMask(browser, keys, output, position) {
  browser.clearValue('#input')
  .setValue('#input', keys)
  .assert.value('#input', output)
  .assert.containsText('#cursor', position)
}

module.exports = {
  'keyboard interactions' : function (browser) {
    const L = browser.Keys.ARROW_LEFT
    const B = browser.Keys.BACK_SPACE

    browser = browser.url('http://localhost:4000/')
    assertMask(browser, ['123', L, B], '12.3', '2') // 12.|3 < 12|.3
    assertMask(browser, ['1234.', L,L,L,L, '0'], '12.03.4', '4') // 12|.34. 0 12.0|3.4
    assertMask(browser, ['12345678'], '12.34.56) 78)', '12') // (44| + 9 => (44) 9|
    browser.end()
  }
}
