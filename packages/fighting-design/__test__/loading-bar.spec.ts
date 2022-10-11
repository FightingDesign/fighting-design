import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import FLoadingBar from '../loading-bar/src/loading-bar.vue'

describe('FLoadingBar', () => {
  test('class', () => {
    const wrapper = mount(FLoadingBar)
    expect(wrapper.classes()).toContain('f-loading-bar')
  })
})
