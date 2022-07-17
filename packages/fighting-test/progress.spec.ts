import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FProgress } from '@fighting-design/fighting-components'

describe('FProgress', () => {
  test('class', () => {
    const wrapper = mount(FProgress)
    expect(wrapper.classes()).toContain('f-progress')
  })

  test('percentage', () => {
    const wrapper = mount(FProgress, {
      props: { percentage: 50 }
    })
    expect(wrapper.find('.f-progress-fill').attributes('style')).toContain(
      '50%'
    )
  })

  test('type', () => {
    const types = ['primary', 'success', 'danger', 'warning'] as const

    types.forEach((item) => {
      const wrapper = mount(FProgress, {
        props: { type: item }
      })
      expect(wrapper.find('.f-progress-fill').classes()).toContain(
        `f-progress-fill-${item}`
      )
    })
  })

  test('square', () => {
    const wrapper = mount(FProgress, {
      props: { square: true, percentage: 25 }
    })
    expect(wrapper.find('.f-progress-bar').attributes('style')).toContain('0')
    expect(wrapper.find('.f-progress-fill').attributes('style')).toContain('0')
  })

  test('linear', () => {
    const wrapper = mount(FProgress, {
      props: { linear: true, percentage: 40 }
    })
    expect(wrapper.classes()).toContain('f-progress-liner')
  })

  test('color', () => {
    const wrapper = mount(FProgress, {
      props: {
        percentage: 50,
        color: 'red'
      }
    })
    expect(wrapper.find('.f-progress-fill').attributes('style')).toContain(
      'red'
    )
  })

  test('background', () => {
    const wrapper = mount(FProgress, {
      props: {
        percentage: 50,
        background: '#f4d1d1'
      }
    })
    expect(wrapper.find('.f-progress-bar').attributes('style')).toContain(
      '#f4d1d1'
    )
  })

  test('width and height', () => {
    const wrapper = mount(FProgress, {
      props: {
        percentage: 50,
        width: '400px',
        height: '26px'
      }
    })
    expect(wrapper.attributes('style')).toContain('400px')
    expect(wrapper.find('.f-progress-bar').attributes('style')).toContain(
      '26px'
    )
  })

  test('stripe', () => {
    const wrapper = mount(FProgress, {
      props: { stripe: true, percentage: 40 }
    })
    console.log(wrapper.find('.f-progress-fill').classes())
    expect(wrapper.find('.f-progress-fill').classes()).toContain(
      'f-progress-stripe'
    )
  })
})
