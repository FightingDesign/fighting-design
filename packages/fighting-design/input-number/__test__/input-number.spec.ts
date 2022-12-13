import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FInputNumber } from '../index'

describe('InputNumber', () => {
  test('class', () => {
    const wrapper = mount(FInputNumber)
    expect(wrapper.classes()).toContain('f-input-number')
  })
})
