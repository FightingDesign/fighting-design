import { expect, test } from 'vitest'
import { toString } from '..'

test('toString', () => {
  expect(toString(1)).toBe('[object Number]')
  expect(toString('1')).toBe('[object String]')
  expect(toString(true)).toBe('[object Boolean]')
  expect(toString([])).toBe('[object Array]')
  expect(toString({})).toBe('[object Object]')
  expect(toString((): number => 1)).toBe('[object Function]')
  expect(toString(new Date())).toBe('[object Date]')
  expect(toString(Symbol(1))).toBe('[object Symbol]')
  expect(toString(null)).toBe('[object Null]')
  expect(toString(undefined)).toBe('[object Undefined]')
  expect(toString(NaN)).toBe('[object Number]')
})
