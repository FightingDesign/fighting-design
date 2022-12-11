import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FFightingGlobal } from '../index'

describe('FightingGlobal', () => {
  test('class', () => {
    const wrapper = mount(FFightingGlobal)
    expect(wrapper.classes()).toContain('f-fighting-global')
  })
})
