import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FMenu } from '../index'

describe('Menu', () => {
  test('class', () => {
    const wrapper = mount(FMenu)
    expect(wrapper.classes()).toContain('f-menu')
  })
})
