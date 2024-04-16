import { expect, test } from 'vitest'
import { financial, zeroPad, convertSize, sizeToNum, convertFormat, splitString } from '..'

test('financial', () => {
  expect(financial(1.2222)).toBe(1.22)
  expect(financial(1.2222, 1)).toBe(1.2)
  expect(financial(1.2222, 10)).toBe(1.2222)
  expect(financial(1.2222, 0.1)).toBe(1)
})

test('zeroPad', () => {
  expect(zeroPad(12)).toBe('12')
  expect(zeroPad(2)).toBe('02')
  expect(zeroPad(4)).toBe('04')
  expect(zeroPad(NaN)).toBe('00')
  expect(zeroPad(4)).toBe('04')
})

test('convertSize', () => {
  expect(convertSize('12')).toBe('12')
  expect(convertSize('12px')).toBe('12px')
  expect(convertSize('12vw')).toBe('12vw')
  expect(convertSize('12vw', 'px')).toBe('12vw')
  expect(convertSize('', 'px')).toBe('')
  expect(convertSize(12, 'px')).toBe('12px')
  expect(convertSize(12)).toBe('12px')
  expect(convertSize(NaN)).toBe('')
})

test('sizeToNum', () => {
  expect(sizeToNum('12')).toBe(12)
  expect(sizeToNum('')).toBe(0)
  expect(sizeToNum(NaN)).toBe(0)
  expect(sizeToNum(12)).toBe(12)
  expect(sizeToNum('undefined')).toBe(0)
  expect(sizeToNum('12px12')).toBe(12)
  expect(sizeToNum('abc')).toBe(0)
})

test('convertFormat', () => {
  expect(convertFormat('HelloAreYouOk')).toBe('hello-are-you-ok')
  expect(convertFormat('')).toBe('')
  expect(convertFormat('123')).toBe('123')
  expect(convertFormat('helloAreYouOk')).toBe('hello-are-you-ok')
})

test('splitString', () => {
  expect(splitString('1,2,3', ',')).toStrictEqual(['1', '2', '3'])
  expect(splitString('', ',')).toStrictEqual([])
})
