import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FSelect } from '../index'

describe('Select', () => {
  test('class', () => {
    const wrapper = mount(FSelect)
    expect(wrapper.classes()).toContain('f-select')
  })
})
