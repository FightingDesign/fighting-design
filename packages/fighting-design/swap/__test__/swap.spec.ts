import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FSwap } from '../index'
import type { SwapType } from '../index'

describe('Swap', () => {
  test('class', () => {
    const wrapper = mount(FSwap)
    expect(wrapper.classes()).toContain('f-swap')
  })

  test('modelValue', () => {
    const wrapper = mount(FSwap, {
      props: { modelValue: true }
    })
    expect(wrapper.classes()).toContain('f-swap__model-value')
  })

  test('type', () => {
    const types: SwapType[] = ['sound', 'swap']
    types.forEach((item: SwapType): void => {
      const wrapper = mount(FSwap, {
        props: { modelValue: false, type: item }
      })
      expect(wrapper.classes()).toContain(`f-swap__${item}`)
    })
  })
})
