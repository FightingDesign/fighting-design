import { describe, expect, test } from 'vitest'
import { setWebComponentName } from '../index'

describe('utils-wrapper', () => {
  test('setWebComponentName', () => {
    expect(setWebComponentName('FButton')).toBe('f-button')
    expect(setWebComponentName('FToolbarItem')).toBe('f-toolbar-item')
  })
})
