import { markRaw } from 'vue'
import { mount } from '@vue/test-utils'
import { vi, describe, expect, test } from 'vitest'
import { FIconSnowflake } from '@fighting-design/fighting-icon'
import { FSwitch } from '../index'
import { FSvgIcon } from '../../svg-icon'
import { FIGHTING_SIZE } from '../../_tokens'
import type { FightingSize } from '../../_interface'

describe('FSwitch', () => {
  test('class', () => {
    const wrapper = mount(FSwitch)
    expect(wrapper.classes()).toContain('f-switch')
  })

  test('modelValue', async () => {
    const wrapper = mount(FSwitch, {
      props: {
        modelValue: true,
        'onUpdate:modelValue': (val: boolean) => {
          wrapper.setProps({ modelValue: val })
        }
      }
    })
    await wrapper.find('.f-switch__input').trigger('click')
    expect(wrapper.props('modelValue')).toBe(false)
  })

  test('size', () => {
    FIGHTING_SIZE.forEach((item: FightingSize) => {
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
    // click is disabled
    wrapper.find('.f-switch__input').trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('click')
  })

  test('loading', () => {
    const wrapper = mount(FSwitch, {
      props: { loading: true }
    })
    expect(wrapper.classes()).toContain('f-switch__disabled')
    expect(wrapper.findComponent(FSvgIcon).classes()).toContain(
      'f-switch__loading-animation'
    )
    // click is disabled
    wrapper.find('.f-switch__input').trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('click')
  })

  test('icon', () => {
    const wrapper = mount(FSwitch, {
      props: { icon: markRaw(FIconSnowflake) }
    })
    expect(wrapper.findComponent(FIconSnowflake).exists()).toBeTruthy()
  })

  test('closeColor', () => {
    const wrapper = mount(FSwitch, {
      props: { closeColor: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('--switch-close-color: red')
  })

  test('activeColor', () => {
    const wrapper = mount(FSwitch, {
      props: { activeColor: 'skyblue' }
    })
    expect(wrapper.attributes('style')).toContain('--switch-active-color: skyblue')
  })

  test('activeText', () => {
    const wrapper = mount(FSwitch, {
      props: { activeText: '开启' }
    })
    expect(wrapper.find('.f-switch__left-text').text()).toContain('开启')
  })

  test('closeText', () => {
    const wrapper = mount(FSwitch, {
      props: { closeText: '关闭' }
    })
    expect(wrapper.find('.f-switch__right-text').text()).toContain('关闭')
  })

  test('square', () => {
    const wrapper = mount(FSwitch, {
      props: { square: true }
    })
    expect(wrapper.find('.f-switch__input').classes()).toContain('f-switch__square')
  })

  test('iconSize', () => {
    const wrapper = mount(FSwitch, {
      props: {
        icon: markRaw(FIconSnowflake),
        iconSize: '20px'
      }
    })
    expect(wrapper.findComponent(FSvgIcon).attributes('style')).toContain(
      '--svg-icon-size: 20px'
    )
  })

  test('onChange', () => {
    const onChange = vi.fn((val: boolean) => val)
    const wrapper = mount(FSwitch, {
      props: {
        onChange,
        modelValue: true
      }
    })
    wrapper.find('.f-switch__input').trigger('click')
    expect(onChange).toHaveBeenCalled()
    expect(onChange).toHaveReturnedWith(false)
  })
})
