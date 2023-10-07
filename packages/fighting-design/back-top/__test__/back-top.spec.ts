import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FBackTop } from '../index'

describe('FBackTop', () => {
  test('class', () => {
    const wrapper = mount(FBackTop)
    expect(wrapper.find('.f-back-top').classes()).toContain('f-back-top')
  })

  test('round', () => {
    const wrapper = mount(FBackTop, {
      props: { round: true }
    })
    expect(wrapper.find('.f-back-top').classes()).toContain('f-back-top__round')
  })

  test('right', () => {
    const wrapper = mount(FBackTop, {
      props: { right: '100px' }
    })
    expect(wrapper.find('.f-back-top').attributes('style')).toContain('100px')
  })

  test('bottom', () => {
    const wrapper = mount(FBackTop, {
      props: { bottom: '100px' }
    })
    expect(wrapper.find('.f-back-top').attributes('style')).toContain('100px')
  })

  test('z-index', () => {
    const wrapper = mount(FBackTop, {
      props: { zIndex: 300 }
    })
    expect(wrapper.find('.f-back-top').attributes('style')).toContain(300)
  })

  test('background', () => {
    const wrapper = mount(FBackTop, {
      props: { background: 'red' }
    })
    expect(wrapper.find('.f-back-top').attributes('style')).toContain(
      '--back-top-background: red'
    )
  })

  test('color', () => {
    const wrapper = mount(FBackTop, {
      props: { color: 'orange' }
    })
    expect(wrapper.find('.f-back-top').attributes('style')).toContain(
      '--back-top-color: orange'
    )
  })

  test('click', async () => {
    const wrapper = mount(FBackTop, {
      slots: { default: '点击测试' }
    })
    await wrapper.trigger('click.stop')
    expect(wrapper.emitted()).toBeDefined()
  })

  test('slots', () => {
    const wrapper = mount(FBackTop, {
      slots: { default: '123' }
    })
    expect(wrapper.find('.f-back-top').text()).toBe('123')
  })
})
