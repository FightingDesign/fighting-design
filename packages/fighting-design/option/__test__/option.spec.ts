import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FOption } from '../index'

describe('Option', () => {
  test('class', () => {
    const wrapper = mount(FOption, {
      props: { label: '选项1' }
    })
    expect(wrapper.classes()).toContain('f-option')
  })
})
