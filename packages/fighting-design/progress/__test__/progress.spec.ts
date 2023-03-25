import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FProgress } from '../index'

describe('FProgress', () => {
  test('class', () => {
    const wrapper = mount(FProgress)
    expect(wrapper.classes()).toContain('f-progress')
    expect(wrapper.attributes('role')).toBe('progressbar')
  })

  test('percentage', () => {
    const wrapper = mount(FProgress, {
      props: { percentage: 50 }
    })
    expect(wrapper.attributes('style')).toContain('--progress-width: 50%')
  })

  test('type', () => {
    const types = ['primary', 'success', 'danger', 'warning'] as const
    types.forEach(item => {
      const wrapper = mount(FProgress, {
        props: { type: item }
      })
      expect(wrapper.classes()).toContain(`f-progress__${item}`)
    })
  })

  test('height', () => {
    const wrapper = mount(FProgress, {
      props: { height: 50 }
    })
    expect(wrapper.attributes('style')).toContain('--progress-height: 50px')
  })

  test('height', () => {
    const wrapper = mount(FProgress, {
      props: { height: '60px' }
    })
    expect(wrapper.attributes('style')).toContain('--progress-height: 60px')
  })

  test('showText', () => {
    const wrapper = mount(FProgress, {
      props: { showText: true }
    })
    expect(wrapper.find('.f-progress__percentage')).not.toBe(true)
  })

  test('showText', () => {
    const wrapper = mount(FProgress, {
      props: { showText: true, outsideText: true }
    })
    expect(wrapper.find('.f-progress__text')).not.toBe(true)
  })

  test('textColor', () => {
    const wrapper = mount(FProgress, {
      props: { textColor: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('--progress-text-color: red')
  })

  test('color', () => {
    const wrapper = mount(FProgress, {
      props: { color: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('--progress-color: red')
  })

  test('stripe', () => {
    const wrapper = mount(FProgress, {
      props: { stripe: true }
    })
    expect(wrapper.classes()).toContain('f-progress__stripe')
  })
})
