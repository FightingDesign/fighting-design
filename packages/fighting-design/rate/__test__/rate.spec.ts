import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FRate } from '../index'

describe('FRate', () => {
  test('class', () => {
    const wrapper = mount(FRate)
    expect(wrapper.classes()).toContain('f-rate')
  })
})
