import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FCheckTag } from '../index'

describe('CheckTag', () => {
  test('class', () => {
    const wrapper = mount(FCheckTag)
    expect(wrapper.classes()).toContain('f-check-tag')
  })
})
