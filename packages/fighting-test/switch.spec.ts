import { FSwitch } from '@fighting-design/fighting-components'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

describe('FSwitch', () => {
  test('class', () => {
    const wrapper = mount(FSwitch)
    expect(wrapper.classes()).toContain('f-switch')
  })

  test('small', () => {
    const size = ['large', 'middle', 'small'] as const
    size.forEach((item) => {
      const wrapper = mount(FSwitch, {
        props: { size: item }
      })
      expect(wrapper.find('.f-switch-input').classes()).toContain(
        `f-switch-${item}`
      )
    })
  })

  test('disabled', () => {
    const wrapper = mount(FSwitch, {
      props: {
        disabled: true
      }
    })
    expect(wrapper.classes()).toContain('f-switch-disabled')
  })

  test('click', () => {
    const wrapper = mount(FSwitch, {
      props: {
        modelValue: true
      }
    })
    wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })
})
