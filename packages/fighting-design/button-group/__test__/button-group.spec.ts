import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FButtonGroup } from '../index'

describe('FButtonGroup', () => {
  test('class', () => {
    const wrapper = mount(FButtonGroup)
    expect(wrapper.classes()).toContain('f-button-group')
  })

  test('size', () => {
    const wrapper = mount(FButtonGroup, {
      props: { size: 'large', vertical: false }
    })
    expect(wrapper.classes()).toContain('f-button-group__large')
  })

  test('direction', () => {
    const wrapper = mount(FButtonGroup, {
      props: { direction: 'vertical' }
    })
    expect(wrapper.classes()).toContain('f-button-group__vertical')
  })

  test('direction', () => {
    const wrapper = mount(FButtonGroup, {
      props: { direction: 'horizontal' }
    })
    expect(wrapper.classes()).toContain('f-button-group__horizontal')
  })

  test('slots', () => {
    const wrapper = mount(FButtonGroup, {
      slots: { default: '123' }
    })
    expect(wrapper.text()).toContain('123')
  })
})
