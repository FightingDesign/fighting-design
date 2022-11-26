import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FMenuItem } from '../index'

describe('MenuItem', () => {
  test('class', () => {
    const wrapper = mount(FMenuItem)
    expect(wrapper.classes()).toContain('f-menu-item')
  })
})
