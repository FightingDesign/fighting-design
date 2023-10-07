import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FCheckbox } from '../index'

describe('FCheckbox', () => {
  test('class', () => {
    const wrapper = mount(FCheckbox)
    expect(wrapper.classes()).toContain('f-checkbox')
  })

  test('label', () => {
    const wrapper = mount(FCheckbox, {
      props: {
        label: 'Math'
      }
    })
    expect(wrapper.get('.f-checkbox .f-checkbox__text').text()).toBe('Math')
  })

  test('disabled', () => {
    const wrapper = mount(FCheckbox, {
      props: {
        disabled: true
      }
    })
    expect(wrapper.get('.f-checkbox').classes()).toContain('f-checkbox__disabled')
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
    const wrapper = mount(FCheckbox)
    await wrapper.get('input[type=checkbox]').setValue(true)
    await wrapper.get('input[type=checkbox]').setValue(false)
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(wrapper.emitted('update:modelValue')?.[0][0]).toBe(true)
    expect(wrapper.emitted('update:modelValue')?.[1][0]).toBe(false)
  })
})
