import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FHeader } from '../index'

describe('f-header', () => {
  test('class', () => {
    const wrapper = mount(FHeader)
    expect(wrapper.classes()).toContain('f-header')
  })

  test('height', () => {
    const wrapper = mount(FHeader, {
      props: { height: '20px' }
    })
    expect(wrapper.attributes('style')).toContain('--header-height: 20px')
  })

  test('height', () => {
    const wrapper = mount(FHeader, {
      props: { height: 20 }
    })
    expect(wrapper.attributes('style')).toContain('--header-height: 20px')
  })

  test('padding', () => {
    const wrapper = mount(FHeader, {
      props: { padding: 20 }
    })
    expect(wrapper.attributes('style')).toContain('--header-padding: 20px')
  })

  test('padding', () => {
    const wrapper = mount(FHeader, {
      props: { padding: '20px' }
    })
    expect(wrapper.attributes('style')).toContain('--header-padding: 20px')
  })

  test('slot', () => {
    const wrapper = mount(FHeader, {
      slots: { default: 'hello' }
    })
    expect(wrapper.text()).toBe('hello')
  })
})
