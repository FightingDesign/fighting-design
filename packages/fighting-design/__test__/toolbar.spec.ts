import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FToolbar } from '../index'

describe('FToolbar', () => {
  test('class', () => {
    const wrapper = mount(FToolbar)
    expect(wrapper.classes()).toContain('f-toolbar')
  })
})
