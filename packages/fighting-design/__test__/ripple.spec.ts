import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FRipple } from '../index'

describe('Ripple', () => {
  test('class', () => {
    const wrapper = mount(FRipple)
    expect(wrapper.classes()).toContain('f-ripple')
  })

  test('noSelect', () => {
    const wrapper = mount(FRipple, {
      props: { noSelect: true }
    })
    expect(wrapper.classes()).toContain('f-ripple-select')
  })

  test('startOpacity', () => {
    const wrapper = mount(FRipple, {
      props: { startOpacity: 0.3, endOpacity: 0 }
    })
    expect(wrapper.attributes('style')).toContain(0.3)
  })

  test('endOpacity', () => {
    const wrapper = mount(FRipple, {
      props: { endOpacity: 0 }
    })
    expect(wrapper.attributes('style')).toContain(0)
  })
})
