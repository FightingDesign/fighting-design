import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FTabs } from '../index'

describe('FTabs', () => {
  test('class', () => {
    const wrapper = mount(FTabs)
    expect(wrapper.classes()).toContain('f-tabs')
  })
})
