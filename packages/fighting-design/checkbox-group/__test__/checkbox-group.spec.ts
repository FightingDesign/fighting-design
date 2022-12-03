import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FCheckboxGroup } from '../index'

describe('FCheckboxGroup', () => {
  test('class', () => {
    const wrapper = mount(FCheckboxGroup)
    expect(wrapper.classes()).toContain('f-checkbox-group')
  })
})
