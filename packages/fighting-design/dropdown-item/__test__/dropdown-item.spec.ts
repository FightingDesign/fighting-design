import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FDropdownItem } from '../index'

describe('DropdownItem', () => {
  test('class', () => {
    const wrapper = mount(FDropdownItem)
    expect(wrapper.classes()).toContain('f-dropdown-item')
  })
})
