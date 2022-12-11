import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FSkeleton } from '../index'

describe('FSkeleton', () => {
  test('class', () => {
    const wrapper = mount(FSkeleton, {
      props: { loading: true },
      slots: { default: '123' }
    })
    expect(wrapper.find('div').classes()).toContain('f-skeleton')
  })

  test('round', () => {
    const wrapper = mount(FSkeleton, {
      props: { loading: true, round: true },
      slots: { default: '123' }
    })
    expect(wrapper.find('div').classes()).toContain('f-skeleton__round')
  })

  test('animated', () => {
    const wrapper = mount(FSkeleton, {
      props: { loading: true, animated: true },
      slots: { default: '123' }
    })
    expect(wrapper.find('div').classes()).toContain('f-skeleton__animated')
  })

  test('size', () => {
    const size = ['large', 'middle', 'small', 'mini'] as const
    size.forEach(item => {
      const wrapper = mount(FSkeleton, {
        props: { loading: true, size: item },
        slots: { default: '123' }
      })
      expect(wrapper.find('div').classes()).toContain(`f-skeleton__${item}`)
    })
  })
})
