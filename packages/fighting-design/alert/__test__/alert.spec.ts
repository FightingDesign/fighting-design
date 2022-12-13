import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FAlert } from '../index'

describe('FAlert', () => {
  test('class', () => {
    const wrapper = mount(FAlert)
    expect(wrapper.find('div').classes()).toContain('f-alert')
  })
})
