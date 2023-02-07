import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FCountdown } from '../index'

describe('Countdown', () => {
  test('class', () => {
    const wrapper = mount(FCountdown)
    expect(wrapper.classes()).toContain('f-countdown')
  })
})
