import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FBadge } from '../index'

describe('FBadge', () => {
  test('class', () => {
    const wrapper = mount(FBadge)
    expect(wrapper.classes()).toContain('f-badge')
    expect(wrapper.find('sup')).toBeDefined()
    expect(wrapper.find('sup').classes()).toEqual([
      'f-badge__content',
      'f-badge__danger'
    ])
  })

  test('type', () => {
    const wrapper = mount(FBadge, {
      props: { type: 'success' }
    })
    expect(wrapper.find('sup').classes()).toContain('f-badge__success')
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
