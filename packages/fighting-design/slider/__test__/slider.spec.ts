import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FSlider } from '../index'

describe('FSlider', () => {
  test('class', () => {
    const wrapper = mount(FSlider)
    expect(wrapper.classes()).toContain('f-slider')
  })
})
