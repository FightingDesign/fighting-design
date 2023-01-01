import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FBadge } from '../index'

describe('FBadge', () => {
  test('class', () => {
    const wrapper = mount(FBadge)
    expect(wrapper.classes()).toContain('f-badge')
    expect(wrapper.find('sup')).toBeDefined()
    expect(wrapper.find('sup').classes()).toEqual(['f-badge__content', 'f-badge__danger'])
  })

  test('type', () => {
    const type = ['primary', 'success', 'danger', 'warning'] as const
    type.forEach(item => {
      const wrapper = mount(FBadge, {
        props: { type: item }
      })
      expect(wrapper.find('.f-badge__content').classes()).toContain(`f-badge__${item}`)
    })
  })

  test('value is string', () => {
    const wrapper = mount(FBadge, {
      props: { value: 'hot' }
    })
    expect(wrapper.find('sup').text()).toBe('hot')
  })

  test('value is number', () => {
    const wrapper = mount(FBadge, {
      props: { value: 20 }
    })
    expect(wrapper.find('sup').text()).toBe('20')
  })

  test('value exceeds max', () => {
    const wrapper = mount(FBadge, {
      props: { value: 50, max: 20 }
    })
    expect(wrapper.find('sup').text()).toBe('20+')
  })

  test('dot', () => {
    const wrapper = mount(FBadge, {
      props: { dot: true }
    })
    expect(wrapper.find('sup').classes()).toContain('f-badge__dot')
  })

  test('dot with type', () => {
    const wrapper = mount(FBadge, {
      props: { dot: true, type: 'success' }
    })
    expect(wrapper.find('sup').classes()).toContain('f-badge__dot')
    expect(wrapper.find('sup').classes()).toContain('f-badge__success')
  })
})
