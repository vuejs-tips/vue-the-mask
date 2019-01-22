function assertMask(browser, keys, output, position) {
  browser
    .clearValue('#input')
    .setValue('#input', keys)
    .assert.value('#input', output)
    .assert.containsText('#cursor', position)
}

module.exports = {
  'keyboard interactions': function(browser) {
    const L = browser.Keys.ARROW_LEFT
    const B = browser.Keys.BACK_SPACE

    browser = browser.url('http://localhost:8080/')
    assertMask(browser, ['023', L, B], '+1 02.3', '5') // 12.|3 < 12|.3
    assertMask(browser, ['0234.', L, L, L, L, '0'], '+1 02.03.4', '7') // 12|.34. 0 12.0|3.4
    assertMask(browser, ['02345678'], '+1 02.34.56) 78)', '15') // (44| + 9 => (44) 9|
    assertMask(browser, ['1'], '+1', '2') // US Phone bug
    browser.end()
  }
}
