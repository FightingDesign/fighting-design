import { expect, test } from 'vitest'
import { financial, zeroPad, convertSize } from '..'

test('financial', () => {
  expect(financial(1.2222)).toBe(1.22)
  expect(financial(1.2222, 1)).toBe(1.2)
  expect(financial(1.2222, 10)).toBe(1.2222)
})

test('zeroPad', () => {
  expect(zeroPad(12)).toBe('12')
  expect(zeroPad(2)).toBe('02')
  expect(zeroPad(4)).toBe('04')
  expect(zeroPad(NaN)).toBe('00')
})

test('convertSize', () => {
  expect(convertSize('12')).toBe('12')
  expect(convertSize('12px')).toBe('12px')
  expect(convertSize('12vw')).toBe('12vw')
  expect(convertSize('12vw', 'px')).toBe('12vw')
  expect(convertSize('', 'px')).toBe('')
  expect(convertSize(12, 'px')).toBe('12px')
  expect(convertSize(12)).toBe('12px')
  expect(convertSize(NaN)).toBe('NaNpx')
})
