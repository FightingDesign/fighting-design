import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FInput } from '../index'

describe('Input', () => {
  test('class', () => {
    const wrapper = mount(FInput)
    expect(wrapper.classes()).toContain('f-input')
  })
})
