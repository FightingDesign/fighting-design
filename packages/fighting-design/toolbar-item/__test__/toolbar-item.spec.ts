import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FToolbarItem } from '../index'

describe('FToolbarItem', () => {
  test('class', () => {
    const wrapper = mount(FToolbarItem)
    expect(wrapper.classes()).toContain('f-toolbar-item')
  })
})
