import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FMenu } from '../index'

describe('Menu', () => {
  test('class', () => {
    const wrapper = mount(FMenu)
    expect(wrapper.classes()).toContain('f-menu')
    expect(wrapper.attributes('role')).toBe('menu')
  })

  test('mode', () => {
    const mode = ['horizontal', 'vertical', 'inline'] as const
    mode.forEach(item => {
      const wrapper = mount(FMenu, {
        props: { mode: item }
      })
      expect(wrapper.classes()).toContain(`f-menu__${item}`)
    })
  })
})
