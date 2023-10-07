import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FBreadcrumbItem } from '../index'

describe('FBreadcrumb', () => {
  test('class', () => {
    const wrapper = mount(FBreadcrumbItem)
    expect(wrapper.classes()).toContain('f-breadcrumb-item')
  })

  test('slot', () => {
    const wrapper = mount(FBreadcrumbItem, {
      slots: { default: 'hello' }
    })
    expect(wrapper.text()).toBe('hello')
  })
})
