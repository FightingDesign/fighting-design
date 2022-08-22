import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FLoading } from '../index'

describe('FLoading', () => {
  test('class', () => {
    const wrapper = mount(FLoading, {
      props: { show: true }
    })
    expect(wrapper.classes()).toContain('f-loading')
  })
})
