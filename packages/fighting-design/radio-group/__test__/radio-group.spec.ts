import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FRadioGroup } from '../index'
import { FIGHTING_SIZE } from '../../_tokens'

describe('RadioGroup', () => {
  test('class', () => {
    const wrapper = mount(FRadioGroup)
    expect(wrapper.classes()).toContain('f-radio-group')
    expect(wrapper.attributes('role')).toContain('radiogroup')
  })

  test('size', () => {
    FIGHTING_SIZE.forEach(item => {
      const wrapper = mount(FRadioGroup, {
        props: { size: item }
      })
      expect(wrapper.classes()).toContain(`f-radio-group__${item}`)
    })
  })

  test('vertical', () => {
    const wrapper = mount(FRadioGroup, {
      props: { vertical: true }
    })
    expect(wrapper.classes()).toContain('f-radio-group__vertical')
  })

  test('background', () => {
    const wrapper = mount(FRadioGroup, {
      props: { background: true }
    })
    expect(wrapper.classes()).toContain('f-radio-group__background')
  })

  test('slot', () => {
    const wrapper = mount(FRadioGroup, {
      slots: { default: '123' }
    })
    expect(wrapper.text()).toBe('123')
  })
})
