import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FMain } from '../index'

describe('f-main', () => {
  test('class', () => {
    const wrapper = mount(FMain)
    expect(wrapper.classes()).toContain('f-main')
  })

  test('padding', () => {
    const wrapper = mount(FMain, {
      props: { padding: '20px' }
    })
    expect(wrapper.attributes('style')).toContain('--main-padding: 20px')
  })

  test('padding', () => {
    const wrapper = mount(FMain, {
      props: { padding: 20 }
    })
    expect(wrapper.attributes('style')).toContain('--main-padding: 20px')
  })

  test('slot', () => {
    const wrapper = mount(FMain, {
      slots: { default: 'hello' }
    })
    expect(wrapper.text()).toBe('hello')
  })
})
