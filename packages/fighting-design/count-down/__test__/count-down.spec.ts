import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FCountDown } from '../index'

describe('CountDown', () => {
  test('class', () => {
    const wrapper = mount(FCountDown)
    expect(wrapper.classes()).toContain('f-count-down')
  })
})
