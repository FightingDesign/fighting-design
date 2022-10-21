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

  test('rounded', () => {
    const wrapper = mount(FSkeleton, {
      props: { loading: true, rounded: true },
      slots: { default: '123' }
    })
    expect(wrapper.find('div').classes()).toContain('f-skeleton__rounded')
  })

  test('animated', () => {
    const wrapper = mount(FSkeleton, {
      props: { loading: true, animated: true },
      slots: { default: '123' }
    })
    expect(wrapper.find('div').classes()).toContain('f-skeleton__animated')
  })

  test('circled', () => {
    const wrapper = mount(FSkeleton, {
      props: { loading: true, circled: true },
      slots: { default: '123' }
    })
    expect(wrapper.find('div').classes()).toContain('f-skeleton__circled')
  })

  test('size', () => {
    const size = ['default', 'small', 'large'] as const
    size.forEach((item) => {
      const wrapper = mount(FSkeleton, {
        props: { loading: true, size: item },
        slots: { default: '123' }
      })
      expect(wrapper.find('div').classes()).toContain(`f-skeleton__${item}`)
    })
  })
})
