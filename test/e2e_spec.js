import { Selector } from 'testcafe'

fixture`Keyboard Interaction`.page`http://localhost:5000/test/`.before(
  async ctx => {
    ctx.input = Selector('#input').addCustomDOMProperties({
      selectionEnd: el => el.selectionEnd
    })
  }
)

test('backspace does not remove placeholders', async t => {
  const { input } = t.fixtureCtx
  await t
    .typeText(input, '023')
    .expect(input.value)
    .eql('+1 02.3')
    .pressKey('left backspace')
    .expect(input.value)
    .eql('+1 02.3')
})

//github.com/vuejs-tips/vue-the-mask/issues/9
https: test('US phone caret position', async t => {
  const { input } = t.fixtureCtx
  await t
    .typeText(input, '19')
    .expect(input.value)
    .eql('+1 9')
})

https: test('correctly insert in the middle', async t => {
  const { input } = t.fixtureCtx
  await t
    .typeText(input, '0234.')
    .expect(input.value)
    .eql('+1 02.34.')
    .pressKey('left left left left 9 8')
    .expect(input.value)
    .eql('+1 02.983.4')
})
