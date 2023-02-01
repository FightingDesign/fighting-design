import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FMenuItem } from '../index'

describe('MenuItem', () => {
  test('class', () => {
    const wrapper = mount(FMenuItem)
    expect(wrapper.classes()).toContain('f-menu-item')
    expect(wrapper.attributes('role')).toBe('menuitem')
  })

  test('fontSize', () => {
    const wrapper = mount(FMenuItem, {
      props: { fontSize: 20 }
    })
    expect(wrapper.attributes('style')).toContain('--menu-item-font-size: 20px')
  })

  test('fontSize', () => {
    const wrapper = mount(FMenuItem, {
      props: { fontSize: '40px' }
    })
    expect(wrapper.attributes('style')).toContain('--menu-item-font-size: 40px')
  })

  test('color', () => {
    const wrapper = mount(FMenuItem, {
      props: { color: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('--menu-item-color: red')
  })

  test('disabled', () => {
    const wrapper = mount(FMenuItem, {
      props: { disabled: true }
    })
    expect(wrapper.classes()).toContain('f-menu-item__disabled')
  })

  test('slots', () => {
    const wrapper = mount(FMenuItem, {
      slots: { default: 'hello' }
    })
    expect(wrapper.find('.f-menu-item__text').text()).toBe('hello')
  })
})
