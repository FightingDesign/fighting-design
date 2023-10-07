import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FNumberAnimate } from '../index'

describe('FNumberAnimate', () => {
  test('class', () => {
    const wrapper = mount(FNumberAnimate)
    expect(wrapper.classes()).toContain('f-number-animate')
  })
})
