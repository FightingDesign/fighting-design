import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FRipple } from '../index'

describe('Ripple', () => {
  test('class', () => {
    const wrapper = mount(FRipple)
    expect(wrapper.classes()).toContain('f-ripple')
  })
})
