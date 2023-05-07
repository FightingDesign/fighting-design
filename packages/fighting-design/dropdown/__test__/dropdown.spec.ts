import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FDropdown } from '../index'

describe('Dropdown', () => {
  test('class', () => {
    const wrapper = mount(FDropdown)
    expect(wrapper.classes()).toContain('f-dropdown')
  })

  test('slot', () => {
    const wrapper = mount(FDropdown, {
      slots: {
        default: '123',
        content: '456'
      }
    })
    expect(wrapper.text()).toContain('123')
  })
})
