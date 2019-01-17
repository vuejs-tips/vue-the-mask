assert = require('assert')

async function assertCursorAt(I, input, expectedPosition) {
  let position = await I.grabAttributeFrom(input, 'selectionEnd')
  return assert.equal(position, expectedPosition + 1)
}

Feature('Keyboard')

Scenario('Cursor Position', async I => {
  I.amOnPage('/')
  I.fillField('#input', '012')
  I.seeInField('#input', '+1 01.2')
  I.pressKey('ArrowLeft')
  I.pressKey('9')
  I.seeInField('#input', '+1 01.92')
  I.pressKey('8')
  I.seeInField('#input', '+1 01.98.2')
  I.seeInField('#cursor', '8')
  // assertCursorAt(I, '#input', 8)
})
