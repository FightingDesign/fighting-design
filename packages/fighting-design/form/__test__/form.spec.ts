import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FForm } from '../index'

describe('Form', () => {
  test('class', () => {
    const wrapper = mount(FForm, {
      slots: { default: '123' }
    })
    expect(wrapper.classes()).toContain('f-form')
    expect(wrapper.attributes('role')).toBe('form')
  })
})
