import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FPopup } from '../index'

describe('FPopup', () => {
  test('class', () => {
    const wrapper = mount(FPopup, {
      props: { visible: true }
    })
    expect(wrapper.find('div').classes()).toContain('f-popup')
  })

  test('z-index', () => {
    const wrapper = mount(FPopup, {
      props: { visible: true, zIndex: 200 }
    })
    expect(wrapper.find('div').attributes('style')).toContain('200')
  })
})
