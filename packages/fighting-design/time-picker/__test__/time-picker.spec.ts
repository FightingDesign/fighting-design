import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FTimePicker } from '../index'

describe('TimePicker', () => {
  test('class', () => {
    const wrapper = mount(FTimePicker)
    expect(wrapper.classes()).toContain('f-time-picker')
  })
})
