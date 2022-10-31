import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FUpLoad } from '../index'

describe('UpLoad', () => {
  test('class', () => {
    const wrapper = mount(FUpLoad)
    expect(wrapper.classes()).toContain('f-up-load')
  })
})
