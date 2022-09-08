import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FRadioGroup } from '../index'

describe('RadioGroup', () => {
  test('class', () => {
    const wrapper = mount(FRadioGroup)
    expect(wrapper.classes()).toContain('f-radio-group')
  })
})
