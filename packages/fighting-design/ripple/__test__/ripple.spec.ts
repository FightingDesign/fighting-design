import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FRipple } from '../index'

describe('FRipple', () => {
  test('class', () => {
    const wrapper = mount(FRipple)
    expect(wrapper.classes()).toContain('f-ripple')
  })

  test('start-opacity', () => {
    const wrapper = mount(FRipple, {
      props: { startOpacity: 0.3 }
    })
    expect(wrapper.attributes('style')).toContain('--ripple-start-opacity: 0.3')
  })

  test('end-opacity', () => {
    const wrapper = mount(FRipple, {
      props: { endOpacity: 0.3 }
    })
    expect(wrapper.attributes('style')).toContain('--ripple-end-opacity: 0.3')
  })
})
