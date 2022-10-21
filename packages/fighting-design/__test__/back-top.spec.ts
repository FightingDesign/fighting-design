import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FBackTop } from '../index'

describe('FBackTop', () => {
  test('class', () => {
    const wrapper = mount(FBackTop)
    expect(wrapper.classes()).toContain('f-back-top')
  })

  test('round', () => {
    const wrapper = mount(FBackTop, {
      props: { round: true }
    })
    expect(wrapper.classes()).toContain('f-back-top__round')
  })

  test('right', () => {
    const wrapper = mount(FBackTop, {
      props: { right: '100px' }
    })
    expect(wrapper.attributes('style')).toContain('100px')
  })

  test('bottom', () => {
    const wrapper = mount(FBackTop, {
      props: { bottom: '100px' }
    })
    expect(wrapper.attributes('style')).toContain('100px')
  })

  test('z-index', () => {
    const wrapper = mount(FBackTop, {
      props: { zIndex: 300 }
    })
    expect(wrapper.attributes('style')).toContain(300)
  })

  test('background', () => {
    const wrapper = mount(FBackTop, {
      props: { background: 'red' }
    })
    expect(wrapper.attributes('style')).toContain(
      'red'
    )
  })

  test('color', () => {
    const wrapper = mount(FBackTop, {
      props: { color: 'orange' }
    })
    expect(wrapper.attributes('style')).toContain(
      'orange'
    )
  })
})
