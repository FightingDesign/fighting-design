import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FList } from '../index'

describe('FList', () => {
  test('class', () => {
    const wrapper = mount(FList)
    expect(wrapper.classes()).toContain('f-list')
  })
})
