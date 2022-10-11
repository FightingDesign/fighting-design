import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FCalendar } from '../index'

describe('Calendar', () => {
  test('class', () => {
    const wrapper = mount(FCalendar)
    expect(wrapper.classes()).toContain('f-calendar')
  })
})
