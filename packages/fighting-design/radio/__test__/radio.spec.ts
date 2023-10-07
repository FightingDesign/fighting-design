import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FRadio } from '../index'

describe('FRadio', () => {
  test('class', () => {
    const wrapper = mount(FRadio)
    expect(wrapper.classes()).toContain('f-radio')
  })
})
