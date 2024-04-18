import { mount } from '@vue/test-utils'
import { vi, describe, expect, test } from 'vitest'
import { FRadio } from '../index'
import type { RadioModelValue } from '../../radio-group'

describe('FRadio', () => {
  test('create & v-model', async () => {
    const wrapper = mount(FRadio, {
      attachTo: document.body,
      props: {
        modelValue: '',
        label: '1',
        'onUpdate:modelValue': (val: RadioModelValue) => {
          wrapper.setProps({ modelValue: val })
        }
      }
    })
    expect(wrapper.classes()).toContain('f-radio')
    await wrapper.trigger('click')
    expect(wrapper.classes()).toContain('f-radio__checked')
    expect(wrapper.props('modelValue')).toBe('1')
  })

  test('disabled', async () => {
    const wrapper = mount(FRadio, {
      attachTo: document.body,
      props: {
        modelValue: '',
        label: '1',
        disabled: true,
        'onUpdate:modelValue': (val: RadioModelValue) => {
          wrapper.setProps({ modelValue: val })
        }
      }
    })
    expect(wrapper.classes()).toContain('f-radio__disabled')
    await wrapper.trigger('click')
    expect(wrapper.classes()).not.toContain('f-radio__checked')
    expect(wrapper.props('modelValue')).toBe('')
  })

  test('name', () => {
    const wrapper = mount(FRadio, {
      props: {
        name: 'f-radio-test'
      }
    })
    expect(wrapper.find('input').attributes('name')).toBe('f-radio-test')
  })

  test('label', () => {
    const wrapper = mount(FRadio, {
      props: {
        label: '1'
      }
    })
    expect(wrapper.find('input').attributes('value')).toBe('1')
    expect(wrapper.find('.f-radio__text').text()).toBe('1')
  })

  test('onChange', async () => {
    const onChange = vi.fn((val: RadioModelValue) => val)
    const wrapper = mount(FRadio, {
      attachTo: document.body,
      props: {
        modelValue: '',
        label: '1',
        onChange,
      }
    })
    await wrapper.trigger('click')
    expect(onChange).toHaveBeenCalled()
    expect(onChange).toHaveReturnedWith('1')
  })

  test('should render slot', () => {
    const wrapper = mount(FRadio, {
      slots: {
        default: '备选项'
      }
    })
    expect(wrapper.find('.f-radio__text').text()).toBe('备选项')
  })
})
