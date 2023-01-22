import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FAside } from '../index'

describe('f-aside', () => {
  test('class', () => {
    const wrapper = mount(FAside)
    expect(wrapper.classes()).toContain('f-aside')
  })

  test('width', () => {
    const wrapper = mount(FAside, {
      props: { width: '200px' }
    })
    expect(wrapper.attributes('style')).toContain('--f-aside-width: 200px')
  })

  test('width', () => {
    const wrapper = mount(FAside, {
      props: { width: 200 }
    })
    expect(wrapper.attributes('style')).toContain('--f-aside-width: 200px')
  })

  test('slot', () => {
    const wrapper = mount(FAside, {
      slots: { default: 'hello' }
    })
    expect(wrapper.text()).toBe('hello')
  })
})
