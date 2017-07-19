import TheMask from '../dist/vue-the-mask'
import tokens from '../src/tokens'

test('TheMask is not default', () => {
  expect(TheMask.name).toBe('TheMask')
})

test('TheMask.tokens is not default', () => {
  expect(TheMask.tokens.default).toBeUndefined()
  expect(Object.keys(TheMask.tokens)).toEqual(Object.keys(tokens))
})
