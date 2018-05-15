import install, { TheMask, tokens, mask, version } from '../dist/vue-the-mask'
import src_tokens from '../src/tokens'
import src_mask from '../src/directive'

const VueTheMask = require('../dist/vue-the-mask')

test('TheMask is not default', () => {
  expect(TheMask.name).toBe('TheMask')
})

test('TheMask.tokens is not default', () => {
  expect(Object.keys(tokens)).toEqual(Object.keys(src_tokens))
})

test('TheMask.mask has directive', () => {
  expect(mask).toBe(mask)
})

test('install', () => {
  expect(typeof install).toBe('function')
})
