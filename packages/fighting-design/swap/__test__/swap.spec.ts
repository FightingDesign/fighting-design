import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FSwap } from '../index'

describe('Swap', () => {
  test('class', () => {
    const wrapper = mount(FSwap)
    expect(wrapper.classes()).toContain('f-swap')
  })
})
