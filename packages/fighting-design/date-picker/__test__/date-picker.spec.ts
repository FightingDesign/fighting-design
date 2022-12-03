import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FDatePicker } from '../index'

describe('DatePicker', () => {
  test('class', () => {
    const wrapper = mount(FDatePicker)
    expect(wrapper.classes()).toContain('f-date-picker')
  })
})
