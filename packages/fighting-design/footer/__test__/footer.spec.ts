import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FFooter } from '../index'

describe('f-footer', () => {
  test('class', () => {
    const wrapper = mount(FFooter)
    expect(wrapper.classes()).toContain('f-footer')
  })

  test('height', () => {
    const wrapper = mount(FFooter, {
      props: { height: '200px' }
    })
    expect(wrapper.attributes('style')).toContain('--footer-height: 200px')
  })

  test('height', () => {
    const wrapper = mount(FFooter, {
      props: { height: 200 }
    })
    expect(wrapper.attributes('style')).toContain('--footer-height: 200px')
  })

  test('padding', () => {
    const wrapper = mount(FFooter, {
      props: { padding: 200 }
    })
    expect(wrapper.attributes('style')).toContain('--footer-padding: 200px')
  })

  test('padding', () => {
    const wrapper = mount(FFooter, {
      props: { padding: '200px' }
    })
    expect(wrapper.attributes('style')).toContain('--footer-padding: 200px')
  })

  test('slot', () => {
    const wrapper = mount(FFooter, {
      slots: { default: 'hello' }
    })
    expect(wrapper.text()).toBe('hello')
  })
})
