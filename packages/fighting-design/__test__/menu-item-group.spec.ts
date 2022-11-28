import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FMenuItemGroup } from '../index'

describe('MenuItemGroup', () => {
  test('class', () => {
    const wrapper = mount(FMenuItemGroup)
    expect(wrapper.classes()).toContain('f-menu-item-group')
  })
})
