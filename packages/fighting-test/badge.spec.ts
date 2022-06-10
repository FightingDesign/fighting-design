import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FBadge } from '@fighting-design/fighting-components'

describe('FBadge', () => {
  test('class', () => {
    const wrapper = mount(FBadge)

    expect(wrapper.classes()).toContain('f-badge')
    expect(wrapper.find('sup')).toBeDefined()
    expect(wrapper.find('sup').classes()).toEqual([
      'f-badge-content',
      'f-badge-danger'
    ])
  })

  test('type', () => {
    const wrapper = mount(FBadge, {
      props: { type: 'success' }
    })
    expect(wrapper.find('sup').classes()).toContain('f-badge-success')
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

  test('isDot', () => {
    const wrapper = mount(FBadge, {
      props: { isDot: true }
    })
    expect(wrapper.find('sup').classes()).toContain('f-badge-dot')
  })

  test('isDot with type', () => {
    const wrapper = mount(FBadge, {
      props: { isDot: true, type: 'success' }
    })
    expect(wrapper.find('sup').classes()).toContain('f-badge-dot')
    expect(wrapper.find('sup').classes()).toContain('f-badge-success')
  })
})
