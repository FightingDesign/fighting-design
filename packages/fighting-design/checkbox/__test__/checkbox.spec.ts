import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FCheckbox } from '../index'

describe('FCheckbox', () => {
  test('class', () => {
    const wrapper = mount(FCheckbox)
    expect(wrapper.classes()).toContain('f-checkbox')
  })
})
