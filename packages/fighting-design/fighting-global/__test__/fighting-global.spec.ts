import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FFightingGlobal } from '../index'

describe('FightingGlobal', () => {
  test('class', () => {
    const wrapper = mount(FFightingGlobal, {
      slots: { default: 'hello' }
    })
    expect(wrapper.text()).toContain('hello')
  })
})
