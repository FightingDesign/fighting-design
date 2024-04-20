import { markRaw } from 'vue'
import { mount } from '@vue/test-utils'
import { vi, describe, expect, test } from 'vitest'
import { FIconSearch } from '@fighting-design/fighting-icon'
import { FInput } from '../index'
import { FIGHTING_SIZE } from '../../_tokens'
import type { InputType } from '../index'
import type { FightingSize } from '../../_interface'

describe('Input', () => {
  test('class', () => {
    const wrapper = mount(FInput)
    expect(wrapper.classes()).toContain('f-input')
    expect(wrapper.attributes('role')).toBe('input')
  })

  test('v-model', async () => {
    const wrapper = mount(FInput, {
      props: { 
        modelValue: 'initialText',
        'onUpdate:modelValue': (val: string | number) => {
          wrapper.setProps({ modelValue: val })
        }
      }
    })
    await wrapper.find('input').setValue('test')
    expect(wrapper.props('modelValue')).toBe('test')
  })

  test('type', () => {
    const types: InputType[] = ['text', 'password', 'number']
    types.forEach((item: InputType) => {
      const wrapper = mount(FInput, {
        props: { type: item }
      })
      expect(wrapper.find('.f-input__input').attributes('type')).toBe(item)
    })
  })

  test('size', () => {
    FIGHTING_SIZE.forEach((item: FightingSize) => {
      const wrapper = mount(FInput, {
        props: { size: item }
      })
      expect(wrapper.classes()).toContain(`f-input__${item}`)
    })
  })

  test('disabled', async () => {
    const wrapper = mount(FInput, {
      props: {
        disabled: true,
      }
    })
    expect(wrapper.classes()).toContain('f-input__disabled')
    expect(wrapper.find('.f-input__input').attributes()).toHaveProperty('disabled')
  })

  test('max', () => {
    const wrapper = mount(FInput, {
      props: { max: 20 }
    })
    expect(wrapper.find('.f-input__input').attributes('max')).toBe('20')
  })

  test('min', () => {
    const wrapper = mount(FInput, {
      props: { min: 20 }
    })
    expect(wrapper.find('.f-input__input').attributes('min')).toBe('20')
  })

  test('maxLength', () => {
    const wrapper = mount(FInput, {
      props: { maxLength: 20 }
    })
    expect(wrapper.find('.f-input__input').attributes('maxlength')).toBe('20')
  })

  test('autofocus', () => {
    const wrapper = mount(FInput, {
      props: { autofocus: true }
    })
    expect(wrapper.find('.f-input__input').attributes()).toHaveProperty('autofocus')
  })

  test('default input name', () => {
    const wrapper = mount(FInput)
    expect(wrapper.find('.f-input__input').attributes('name')).toBe('f-input')
  })

  test('custom input name', () => {
    const wrapper = mount(FInput, {
      props: { name: 'admin' }
    })
    expect(wrapper.find('.f-input__input').attributes('name')).toBe('admin')
  })

  test('placeholder', () => {
    const wrapper = mount(FInput, {
      props: { placeholder: '请输入' }
    })
    expect(wrapper.find('.f-input__input').attributes('placeholder')).toBe('请输入')
  })

  test('fontSize', () => {
    const fontSize = 14
    const fontSizeList: [number, string] = [fontSize, `${fontSize}px`]
    fontSizeList.forEach((item) => {
      const wrapper = mount(FInput, {
        props: { fontSize: item }
      })
      expect(wrapper.attributes('style')).toContain(`--input-font-size: ${fontSize}px`)

    })
  })

  test('placeholderColor', () => {
    const wrapper = mount(FInput, {
      props: { placeholderColor: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('--input-placeholder-color: red')
  })

  test('width', () => {
    const width = 100
    const widthList: [number, string] = [width, `${width}px`]
    widthList.forEach((item) => {
      const wrapper = mount(FInput, {
        props: { width: item }
      })
      expect(wrapper.attributes('style')).toContain(`--input-width: ${width}px`)
    })
  })

  test('height', () => {
    const height = 100
    const heightList: [number, string] = [height, `${height}px`]
    heightList.forEach((item) => {
      const wrapper = mount(FInput, {
        props: { height: item }
      })
      expect(wrapper.attributes('style')).toContain(`--input-height: ${height}px`)
    })
  })

  test('textColor', () => {
    const wrapper = mount(FInput, {
      props: { textColor: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('--input-text-color: red')
  })

  test('clicking `clear` icon should clear input value', async () => {
    const wrapper = mount(FInput, {
      props: {
        clear: true,
        modelValue: 'test',
        'onUpdate:modelValue': (val: string | number) => {
          wrapper.setProps({ modelValue: val })
        }
      }
    })
    expect(wrapper.find('.f-input__clear-btn').exists()).toBeTruthy()
    await wrapper.find('.f-input__clear-btn').trigger('click')
    expect(wrapper.props('modelValue')).toBe('')
  })

  test('clicking the search button should invoke `onSearch` callback', async () => {
    const modelValue = 'test'
    const onSearch = vi.fn((val: string, evt: Event) => val)
    const wrapper = mount(FInput, {
      props: {
        onSearch,
        modelValue,
        search: true
      }
    })
    expect(wrapper.classes()).toContain('f-input__search')
    expect(wrapper.find('.f-input__search').exists()).toBeTruthy()

    const button = wrapper.find('.f-button')
    await button.trigger('click')
    expect(onSearch).toHaveBeenCalled()
    expect(onSearch).toHaveReturnedWith(modelValue)
  })

  test('readonly', () => {
    const wrapper = mount(FInput, {
      props: { readonly: true }
    })
    expect(wrapper.find('.f-input__input').attributes()).toHaveProperty('readonly')
  })

  test('clicking the icon should toggle the visibility of the password value', async () => {
    const wrapper = mount(FInput, {
      props: {
        type: 'password',
        showPassword: true
      }
    })
    const input = wrapper.find('.f-input__input')
    const passwordIcon = wrapper.find('.f-input__show-password')

    expect(passwordIcon.exists()).toBeTruthy()
    await passwordIcon.trigger('click')
    expect(input.attributes('type')).toBe('text')
    await passwordIcon.trigger('click')
    expect(input.attributes('type')).toBe('password')
  })

  test('icon', () => {
    const wrapper = mount(FInput, {
      props: {
        icon: markRaw(FIconSearch)
      }
    })
    expect(wrapper.find('.f-input__icon').exists()).toBeTruthy()
    expect(wrapper.findComponent(FIconSearch).exists()).toBeTruthy()
  })

  test('pressing the enter key should invoke `onEnter` callback', async () => {
    const modelValue = 'test'
    const onEnter = vi.fn((val: string, evt: Event) => val)
    const wrapper = mount(FInput, {
      props: {
        modelValue,
        onEnter
      }
    })
    await wrapper.find('input').trigger('keyup.enter')
    expect(onEnter).toHaveBeenCalled()
    expect(onEnter).toHaveReturnedWith(modelValue)
  })

  test('onChange', async () => {
    const onChange = vi.fn((val: number | string, evt: Event) => val)
    const wrapper = mount(FInput, {
      props: {
        onChange,
      }
    })
    await wrapper.find('input').setValue('test')
    expect(onChange).toHaveBeenCalled()
    expect(onChange).toHaveReturnedWith('test')
  })

  test('onInput', async () => {
    const onInput = vi.fn((val: number | string, evt: Event) => val)
    const wrapper = mount(FInput, {
      props: { onInput }
    })
    await wrapper.find('input').setValue('test')
    expect(onInput).toHaveBeenCalled()
    expect(onInput).toHaveReturnedWith('test')
  })

  test('onBlur', async () => {
    const onBlur = vi.fn((evt: Event) => evt)
    const wrapper = mount(FInput, {
      props: { onBlur }
    })
    await wrapper.find('input').trigger('blur')
    expect(onBlur).toHaveBeenCalled()
  })

  test('onFocus', async () => {
    const onFocus = vi.fn((evt: Event) => evt)
    const wrapper = mount(FInput, {
      props: { onFocus }
    })
    await wrapper.find('input').trigger('focus')
    expect(onFocus).toHaveBeenCalled()
  })

  test('should render before slot', () => {
    const wrapper = mount(FInput, {
      slots: {
        before: 'before slot'
      }
    })
    expect(wrapper.text()).toContain('before slot')
  })

  test('should render after slot', () => {
    const wrapper = mount(FInput, {
      slots: {
        after: 'after slot'
      }
    })
    expect(wrapper.text()).toContain('after slot')
  })

  test('should render searchBtn slot', () => {
    const wrapper = mount(FInput, {
      props: {
        search: true,
      },
      slots: {
        searchBtn: 'searchBtn slot'
      }
    })
    expect(wrapper.text()).toContain('searchBtn slot')
  })
})
