import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FColorPicker } from '../index'

describe('ColorPicker', () => {
  test('class', () => {
    const wrapper = mount(FColorPicker)
    expect(wrapper.classes()).toContain('f-color-picker')
  })

  test('disabled state', () => {
    const wrapper = mount(FColorPicker, {
      props: {
        disabled: true
      }
    })
    expect(wrapper.classes()).toContain('is-disabled')
  })

  test('size prop', () => {
    const wrapper = mount(FColorPicker, {
      props: {
        size: 'small'
      }
    })
    expect(wrapper.classes()).toContain('f-color-picker--small')
  })

  test('modelValue updates preview color', async () => {
    const wrapper = mount(FColorPicker, {
      props: {
        modelValue: '#ff0000'
      }
    })
    const preview = wrapper.find('.f-color-picker__preview')
    expect(preview.attributes('style')).toContain('background-color: rgba(255, 0, 0, 1)')
  })

  test('clicking trigger toggles dropdown', async () => {
    const wrapper = mount(FColorPicker)
    const trigger = wrapper.find('.f-color-picker__trigger')
    
    await trigger.trigger('click')
    expect(wrapper.find('.f-color-picker__dropdown').exists()).toBe(true)
    
    await trigger.trigger('click')
    expect(wrapper.find('.f-color-picker__dropdown').exists()).toBe(false)
  })

  test('disabled picker does not open dropdown', async () => {
    const wrapper = mount(FColorPicker, {
      props: {
        disabled: true
      }
    })
    const trigger = wrapper.find('.f-color-picker__trigger')
    
    await trigger.trigger('click')
    expect(wrapper.find('.f-color-picker__dropdown').exists()).toBe(false)
  })
})  
