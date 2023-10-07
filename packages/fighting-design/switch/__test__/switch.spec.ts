import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FSwitch } from '../index'
import { FIGHTING_SIZE } from '../../_tokens'
import type { FightingSize } from '../../_interface'

describe('FSwitch', () => {
  test('class', () => {
    const wrapper = mount(FSwitch)
    expect(wrapper.classes()).toContain('f-switch')
  })

  test('size', () => {
    FIGHTING_SIZE.forEach((item: FightingSize): void => {
      const wrapper = mount(FSwitch, {
        props: { size: item }
      })
      expect(wrapper.find('.f-switch__input').classes()).toContain(`f-switch__${item}`)
    })
  })

  test('disabled', () => {
    const wrapper = mount(FSwitch, {
      props: { disabled: true }
    })
    expect(wrapper.classes()).toContain('f-switch__disabled')
  })

  test('click', () => {
    const wrapper = mount(FSwitch, {
      props: { modelValue: true }
    })
    wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })
})
