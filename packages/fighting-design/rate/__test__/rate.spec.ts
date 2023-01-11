import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FRate } from '../index'

describe('FRate', () => {
  test('class', () => {
    const wrapper = mount(FRate)
    expect(wrapper.classes()).toContain('f-rate')
    expect(wrapper.attributes('role')).toBe('slider')
  })

  test('readonly', () => {
    const wrapper = mount(FRate, {
      props: { readonly: true }
    })
    expect(wrapper.find('.f-rate__star').classes()).toContain('f-rate__star-readonly')
  })

  test('textShow', () => {
    const wrapper = mount(FRate, {
      props: { textShow: true, modelValue: 2 }
    })
    expect(wrapper.find('.f-text')).not.toBeNull()
    expect(wrapper.find('.f-text').text()).toBe('失望')
  })

  test('textColor', () => {
    const wrapper = mount(FRate, {
      props: { textShow: true, textArr: ['1', '2', '3', '4', '5'], modelValue: 2 }
    })
    expect(wrapper.find('.f-text')).not.toBeNull()
    expect(wrapper.find('.f-text').text()).toBe('2')
  })
})
