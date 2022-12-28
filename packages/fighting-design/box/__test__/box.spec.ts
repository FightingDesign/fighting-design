import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FBox } from '../index'

describe('Box', () => {
  test('class', () => {
    const wrapper = mount(FBox)
    expect(wrapper.classes()).toContain('f-box')
  })
})
