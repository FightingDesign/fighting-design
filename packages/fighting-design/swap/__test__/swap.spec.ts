import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FSwap } from '../index'

describe('Swap', () => {
  test('class', () => {
    const wrapper = mount(FSwap)
    expect(wrapper.classes()).toContain('f-swap')
  })

  test('type', () => {
    const types = ['sound', 'swap', 'default'] as const
    types.forEach(item => {
      const wrapper = mount(FSwap, {
        props: { modelValue: true, type: item }
      })
      expect(wrapper.classes()).toContain(`f-swap__${item}-on`)
    })
  })

  test('type', () => {
    const types = ['sound', 'swap', 'default'] as const
    types.forEach(item => {
      const wrapper = mount(FSwap, {
        props: { modelValue: false, type: item }
      })
      expect(wrapper.classes()).toContain(`f-swap__${item}-off`)
    })
  })
})
