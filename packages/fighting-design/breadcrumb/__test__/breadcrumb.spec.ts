import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FBreadcrumb } from '../index'

describe('FBreadcrumb', () => {
  test('class', () => {
    const wrapper = mount(FBreadcrumb, {
      slots: { default: 'hello' }
    })
    expect(wrapper.classes()).toContain('f-breadcrumb')
    expect(wrapper.text()).toContain('hello')
  })
})
