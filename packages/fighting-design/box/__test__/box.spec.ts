import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FBox } from '../index'

describe('Box', () => {
  test('class', () => {
    const wrapper = mount(FBox)
    expect(wrapper.classes()).toContain('f-box')
  })

  test('role', () => {
    const wrapper = mount(FBox, {
      props: { role: 'list' }
    })
    expect(wrapper.attributes('role')).toContain('list')
  })

  test('padding', () => {
    const wrapper = mount(FBox, {
      props: { padding: 20 }
    })
    expect(wrapper.attributes('style')).toContain('--box-padding: 20px')
  })

  test('padding', () => {
    const wrapper = mount(FBox, {
      props: { padding: '30px' }
    })
    expect(wrapper.attributes('style')).toContain('--box-padding: 30px')
  })

  test('width', () => {
    const wrapper = mount(FBox, {
      props: { width: 20 }
    })
    expect(wrapper.attributes('style')).toContain('--box-width: 20px')
  })

  test('width', () => {
    const wrapper = mount(FBox, {
      props: { width: '30px' }
    })
    expect(wrapper.attributes('style')).toContain('--box-width: 30px')
  })

  test('height', () => {
    const wrapper = mount(FBox, {
      props: { height: 20 }
    })
    expect(wrapper.attributes('style')).toContain('--box-height: 20px')
  })

  test('height', () => {
    const wrapper = mount(FBox, {
      props: { height: '30px' }
    })
    expect(wrapper.attributes('style')).toContain('--box-height: 30px')
  })

  test('background', () => {
    const wrapper = mount(FBox, {
      props: { background: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('--box-background: red')
  })

  test('display', () => {
    const wrapper = mount(FBox, {
      props: { display: 'block' }
    })
    expect(wrapper.attributes('style')).toContain('--box-display: block')
  })

  test('display', () => {
    const wrapper = mount(FBox, {
      props: { display: 'flex' }
    })
    expect(wrapper.attributes('style')).toContain('--box-display: flex')
  })

  test('slot', () => {
    const wrapper = mount(FBox, {
      slots: { default: 'hello' }
    })
    expect(wrapper.text()).toBe('hello')
  })
})
