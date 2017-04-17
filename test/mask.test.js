import maskit from '../src/maskit'

test('12 #.#', () => {
  expect(maskit('12', '#.#')).toBe('1.2')
})

test('1 (#)', () => { // placeholder at the end
  expect(maskit('1', '(#)')).toBe('(1)')
})

test('1 [(#)]', () => { // two placeholder at the end
  expect(maskit('1', '[(#)]')).toBe('[(1)]')
})

test('1 #.#', () => {
  expect(maskit('1', '#.#')).toBe('1')
})

test('1. #.#', () => {
  expect(maskit('1.', '#.#')).toBe('1.')
})

test('123 #.#', () => {
  expect(maskit('123', '#.#')).toBe('1.2')
})

test('raw phone number', () => {
  expect(maskit('44998765432', '+55 (##) #####-####', false)).toBe('44998765432')
})

test('abcd12345 XXX-####', () => {
  expect(maskit('abcd12345', 'XXX-####')).toBe('ABC-1234')
})

test('a5-12-34 => (**) - ## - ##', () => {
  expect(maskit('a5-12-34', '(**) - ## - ##')).toBe('(a5) - 12 - 34')
})

test('123 ##(#)', () => {
  expect(maskit('123', '##(#)')).toBe('12(3)')
})

test('123 #!#(#)', () => {
  expect(maskit('12', '#!#(#)')).toBe('1#(2)')
})
