import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FDialog } from '../index'

describe('FDialog', () => {
  test('class', () => {
    const wrapper = mount(FDialog)
    expect(wrapper.find('div').classes()).toContain('f-popup')
  })
})
