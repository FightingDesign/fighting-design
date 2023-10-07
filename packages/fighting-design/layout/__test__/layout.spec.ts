import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FLayout } from '../index'

describe('f-layout', () => {
  test('class', () => {
    const wrapper = mount(FLayout)
    expect(wrapper.classes()).toContain('f-layout')
  })

  test('direction', () => {
    const wrapper = mount(FLayout, {
      props: { direction: 'vertical' }
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
