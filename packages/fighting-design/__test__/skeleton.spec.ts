import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FSkeleton } from '../index'

describe('FSkeleton', () => {
  test('class', () => {
    const wrapper = mount(FSkeleton)
    expect(wrapper.classes()).toContain('f-skeleton')
  })
})
