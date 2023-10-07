import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FFormItem } from '../index'

describe('FormItem', () => {
  test('class', () => {
    const wrapper = mount(FFormItem)
    expect(wrapper.classes()).toContain('f-form-item')
  })
})
