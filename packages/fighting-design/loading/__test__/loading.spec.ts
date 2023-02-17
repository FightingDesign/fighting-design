import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import FLoadingVue from '../src/loading.vue'

describe('FLoading', () => {
  test('class', () => {
    const wrapper = mount(FLoadingVue, {
      props: { visible: true }
    })
    expect(wrapper.classes()).toContain('f-loading')
  })
})
