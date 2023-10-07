import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FTooltip } from '../index'

describe('FTooltip', () => {
  test('class', () => {
    const wrapper = mount(FTooltip, {
      slots: { default: 'test' }
    })
    expect(wrapper.classes()).toContain('f-tooltip')
    expect(wrapper.attributes('role')).toContain('tooltip')
  })
})
