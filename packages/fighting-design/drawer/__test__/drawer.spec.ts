import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FDrawer } from '../index'

describe('FDrawer', () => {
  test('class', () => {
    const wrapper = mount(FDrawer)
    expect(wrapper.find('div').classes()).toContain('f-popup')
  })
})
