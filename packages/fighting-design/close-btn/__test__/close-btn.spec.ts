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

  test('size', () => {
    const wrapper = mount(FCloseBtn, {
      props: {
        size: 100
      }
    })
    expect(wrapper.getComponent('.f-svg-icon').attributes().style).toContain(
      '--svg-icon-size: 100px;'
    )
  })

  test('round', () => {
    const wrapper = mount(FCloseBtn, {
      slots: { default: '123' },
      props: { round: true }
    })
    expect(wrapper.classes()).toContain('f-close-btn__round')
  })

  test('slots', () => {
    const wrapper = mount(FCloseBtn, {
      slots: { default: '123' },
      props: { disabled: true }
    })
    expect(wrapper.classes()).toContain('f-close-btn__disabled')
  })

  test('disabled', () => {
    const wrapper = mount(FCloseBtn, {
      slots: { default: '123' },
      props: { disabled: true }
    })
    expect(wrapper.classes()).toContain('f-close-btn__disabled')
  })

  test('color', () => {
    const wrapper = mount(FCloseBtn, {
      slots: { default: '123' },
      props: { color: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('--close-btn-color: red')
  })

  test('hoverColor', () => {
    const wrapper = mount(FCloseBtn, {
      slots: { default: '123' },
      props: { hoverColor: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('--close-btn-hover-color: red')
  })

  test('click', async () => {
    const wrapper = mount(FCloseBtn, {
      slots: { default: '123' },
      props: { hoverColor: 'red' }
    })
    await wrapper.get('.f-close-btn').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
})
