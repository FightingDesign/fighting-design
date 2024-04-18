import { mount } from '@vue/test-utils'
import { vi, describe, expect, test } from 'vitest'
import { FCheckbox } from '../index'
import type { CheckboxModelValue } from '../src/interface'

describe('FCheckbox', () => {
  test('class', () => {
    const wrapper = mount(FCheckbox)
    expect(wrapper.classes()).toContain('f-checkbox')
  })

  test('v-model', async () => {
    const wrapper = mount(FCheckbox, {
      attachTo: document.body,
      props: {
        modelValue: false,
        'onUpdate:modelValue': (val: CheckboxModelValue | string[]) => {
          wrapper.setProps({ modelValue: val })
        }
      }
    })
    await wrapper.trigger('click')
    expect(wrapper.classes()).toContain('f-checkbox__checked')
    expect(wrapper.props('modelValue')).toBe(true)
  })

  test('label', () => {
    const wrapper = mount(FCheckbox, {
      props: {
        label: 'Math'
      }
    })
    expect(wrapper.get('.f-checkbox .f-checkbox__text').text()).toBe('Math')
  })

  test('should render slot', () => {
    const wrapper = mount(FCheckbox, {
      slots: {
        default: 'Math'
      }
    })
    expect(wrapper.get('.f-checkbox .f-checkbox__text').text()).toBe('Math')
  })

  test('disabled', async () => {
    const wrapper = mount(FCheckbox, {
      attachTo: document.body,
      props: {
        disabled: true,
        modelValue: false,
        'onUpdate:modelValue': (val: CheckboxModelValue | string[]) => {
          wrapper.setProps({ modelValue: val })
        }
      }
    })
    expect(wrapper.classes()).toContain('f-checkbox__disabled')
    expect(wrapper.find('.f-checkbox__input').attributes()).toHaveProperty('disabled')
    await wrapper.trigger('click')
    expect(wrapper.classes()).not.toContain('f-checkbox__checked')
    expect(wrapper.props('modelValue')).toBe(false)
  })

  test('showLabel', () => {
    const wrapper = mount(FCheckbox, {
      props: {
        label: 'Math',
        showLabel: false
      }
    })
    expect(wrapper.get('.f-checkbox .f-checkbox__text').text()).toBe('')
  })

  test('onChange', async () => {
    const onChange = vi.fn(val => val)
    const wrapper = mount(FCheckbox, {
      attachTo: document.body,
      props: { onChange }
    })
    await wrapper.trigger('click')
    expect(onChange).toHaveBeenCalled()
    expect(onChange).toHaveReturnedWith(true)
  })
})
