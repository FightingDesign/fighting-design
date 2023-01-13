import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FSubmenu } from '../index'

describe('Submenu', () => {
  test('class', () => {
    const wrapper = mount(FSubmenu)
    expect(wrapper.classes()).toContain('f-submenu')
    expect(wrapper.attributes('role')).toContain('menuitem')
  })
})
