import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FStickyCard } from '../index'

describe('StickPanel', () => {
  test('class', () => {
    const wrapper = mount(FStickyCard)
    expect(wrapper.classes()).toContain('f-sticky-card')
  })
})
