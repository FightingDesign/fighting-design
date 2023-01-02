import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FDropdownItem } from '../index'

describe('DropdownItem', () => {
  test('class', () => {
    const wrapper = mount(FDropdownItem)
    expect(wrapper.classes()).toContain('f-dropdown-item')
  })

  test('disabled', () => {
    const wrapper = mount(FDropdownItem, {
      props: {
        disabled: true
      }
    })
    expect(wrapper.classes()).toContain('f-dropdown-item__disabled')
  })
})
