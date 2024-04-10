import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FLayout } from '../index'
import FHeader from '../../header'
import FFooter from '../../footer'

describe('f-layout', () => {
  test('class', () => {
    const wrapper = mount(FLayout)
    expect(wrapper.classes()).toContain('f-layout')
  })

  test('direction is vertical', () => {
    const wrapper = mount(FLayout, {
      props: { direction: 'vertical' }
    })
    expect(wrapper.classes()).toContain('f-layout__vertical')
  })

  test('direction is horizontal', () => {
    const wrapper = mount(FLayout, {
      props: { direction: 'horizontal' }
    })
    expect(wrapper.classes()).not.toContain('f-layout__horizontal')
  })

  test('direction is vertical when render slot with FHeader component', () => {
    const wrapper = mount(FLayout, {
      slots: { default: FHeader }
    })
    expect(wrapper.classes()).toContain('f-layout__vertical')
  })

  test('direction is vertical when render slot with FFooter component', () => {
    const wrapper = mount(FLayout, {
      slots: { default: FFooter }
    })
    expect(wrapper.classes()).toContain('f-layout__vertical')
  })

  test('slot', () => {
    const wrapper = mount(FLayout, { 
      slots: { default: 'hello' }
    })
    expect(wrapper.text()).toBe('hello')
  })
})
