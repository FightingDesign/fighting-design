import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FCloseBtn } from '../index'

describe('CloseBtn', () => {
  test('class', () => {
    const wrapper = mount(FCloseBtn)
    expect(wrapper.classes()).toContain('f-close-btn')
  })
})
