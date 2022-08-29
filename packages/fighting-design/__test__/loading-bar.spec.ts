import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FLoadingBar } from '../index'

describe('FLoadingBar', () => {
  test('class', () => {
    const wrapper = mount(FLoadingBar)
    expect(wrapper.classes()).toContain('f-loading-bar')
  })
})
