import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FCloseBtn } from '../index'

describe('CloseBtn', () => {
  test('class', () => {
    const wrapper = mount(FCloseBtn, {
      slots: { default: '123' }
    })
    expect(wrapper.classes()).toContain('f-close-btn')
  })

  test('class', () => {
    const wrapper = mount(FCloseBtn, {
      slots: { default: '123' },
      props: { round: true }
    })
    expect(wrapper.classes()).toContain('f-close-btn__round')
  })

  test('class', () => {
    const wrapper = mount(FCloseBtn, {
      slots: { default: '123' },
      props: { disabled: true }
    })
    expect(wrapper.classes()).toContain('f-close-btn__disabled')
  })
})
