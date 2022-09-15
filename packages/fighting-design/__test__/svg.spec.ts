import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FSvg } from '../index'

describe('FSvg', () => {
  test('class', () => {
    const wrapper = mount(FSvg)
    expect(wrapper.classes()).toContain('f-svg')
  })
})
