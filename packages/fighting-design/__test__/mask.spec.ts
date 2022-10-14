import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FMask } from '../index'

describe('FMask', () => {
  test('class', () => {
    const wrapper = mount(FMask, {
      props: { visible: true }
    })
    expect(wrapper.find('div').classes()).toContain('f-mask')
  })

  test('z-index', () => {
    const wrapper = mount(FMask, {
      props: { visible: true, zIndex: 200 }
    })
    expect(wrapper.find('div').attributes('style')).toContain('200')
  })
})
