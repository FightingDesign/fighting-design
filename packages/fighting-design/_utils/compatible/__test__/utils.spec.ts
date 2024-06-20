import { expect, test } from 'vitest'
import { objectEntries } from '..'

const data = {
  a: 1,
  b: 2,
  c: 3
}

test('objectEntries', () => {
  /**
   * @see toStrictEqual https://cn.vitest.dev/api/expect.html#tostrictequal
   */
  expect(objectEntries(data)).toStrictEqual([
    ['a', 1],
    ['b', 2],
    ['c', 3]
  ])
})
