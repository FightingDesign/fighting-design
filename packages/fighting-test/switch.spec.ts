import { FSwitch } from '@fighting-design/fighting-components'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

describe('FSwitch', () => {
  test('class', () => {
    const wrapper = mount(FSwitch)
    expect(wrapper.classes()).toContain('f-switch')
  })

  test('small', () => {
    const wrapper = mount(FSwitch, {
      props: {
        size: 'small'
      }
    })
    expect(wrapper.classes()).toContain('f-switch-small')
  })

  test('middle', () => {
    const wrapper = mount(FSwitch, {
      props: {
        size: 'middle'
      }
    })
    expect(wrapper.classes()).toContain('f-switch-middle')
  })

  test('large', () => {
    const wrapper = mount(FSwitch, {
      props: {
        size: 'large'
      }
    })
    expect(wrapper.classes()).toContain('f-switch-large')
  })

  test('disabled', () => {
    const wrapper = mount(FSwitch, {
      props: {
        disabled: true
      }
    })
    expect(wrapper.classes()).toContain('f-switch-disabled')
  })

  test('change', () => {
    const wrapper = mount(FSwitch, {
      props: {
        modelValue: true
      }
    })
    wrapper.trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
