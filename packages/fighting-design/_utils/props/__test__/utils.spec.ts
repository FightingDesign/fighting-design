import { expect, test } from 'vitest'
import { setBooleanProp, setNumberProp, setStringProp, setStringNumberProp } from '..'

test('setBooleanProp', () => {
  /**
   * @see toStrictEqual https://cn.vitest.dev/api/expect.html#tostrictequal
   */
  expect(setBooleanProp(true)).toStrictEqual({ type: Boolean, default: true })
  expect(setBooleanProp(false)).toStrictEqual({ type: Boolean, default: false })
  expect(setBooleanProp()).toStrictEqual({ type: Boolean, default: false })
})

test('setNumberProp', () => {
  expect(setNumberProp(1)).toStrictEqual({ type: Number, default: 1 })
  expect(setNumberProp(2)).toStrictEqual({ type: Number, default: 2 })
  expect(setNumberProp()).toStrictEqual({ type: Number, default: void 0 })
})

test('setStringProp', () => {
  expect(setStringProp('123')).toStrictEqual({ type: String, default: '123' })
})

test('setStringNumberProp', () => {
  expect(setStringNumberProp('123')).toStrictEqual({
    type: [String, Number],
    default: '123'
  })
  expect(setStringNumberProp()).toStrictEqual({ type: [String, Number], default: void 0 })
  expect(setStringNumberProp(222)).toStrictEqual({ type: [String, Number], default: 222 })
})
