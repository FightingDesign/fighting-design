import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FExpandCard } from '../index'

describe('FExpandCard', () => {
  test('class', () => {
    const wrapper = mount(FExpandCard)
    expect(wrapper.find('div').classes()).toContain('f-expand-card')
  })
})
