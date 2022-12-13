import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FUpLoad } from '../index'

describe('FUpLoad', () => {
  test('class', () => {
    const wrapper = mount(FUpLoad)
    expect(wrapper.find('div').classes()).toContain('f-up-load')
  })
})
