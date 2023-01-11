import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FInput } from '../index'

describe('Input', () => {
  test('class', () => {
    const wrapper = mount(FInput)
    expect(wrapper.classes()).toContain('f-input')
  })

  test('type', () => {
    const size = ['text', 'password', 'number'] as const
    size.forEach(item => {
      const wrapper = mount(FInput, {
        props: { type: item }
      })
      expect(wrapper.find('.f-input__input').attributes('type')).toContain(item)
    })
  })

  test('size', () => {
    const size = ['large', 'middle', 'small', 'mini'] as const
    size.forEach(item => {
      const wrapper = mount(FInput, {
        props: { size: item }
      })
      expect(wrapper.classes()).toContain(`f-input__${item}`)
    })
  })

  test('disabled', () => {
    const wrapper = mount(FInput, {
      props: { disabled: true }
    })
    expect(wrapper.find('.f-input__input').attributes('disabled')).not.toBeNull()
    expect(wrapper.find('.f-input__wrapper').classes()).toContain('f-input__disabled')
  })

  test('max', () => {
    const wrapper = mount(FInput, {
      props: { max: 20 }
    })
    expect(wrapper.find('.f-input__input').attributes('max')).toContain(20)
  })

  test('min', () => {
    const wrapper = mount(FInput, {
      props: { min: 20 }
    })
    expect(wrapper.find('.f-input__input').attributes('min')).toContain(20)
  })

  test('maxLength', () => {
    const wrapper = mount(FInput, {
      props: { maxLength: 20 }
    })
    expect(wrapper.find('.f-input__input').attributes('maxlength')).toContain(20)
  })

  test('autofocus', () => {
    const wrapper = mount(FInput, {
      props: { autofocus: true }
    })
    expect(wrapper.find('.f-input__input').attributes('autofocus')).not.toBeNull()
  })

  test('name', () => {
    const wrapper = mount(FInput)
    expect(wrapper.find('.f-input__input').attributes('name')).toContain('f-input')
  })

  test('name', () => {
    const wrapper = mount(FInput, {
      props: { name: 'admin' }
    })
    expect(wrapper.find('.f-input__input').attributes('name')).toContain('admin')
  })

  test('placeholder', () => {
    const wrapper = mount(FInput, {
      props: { placeholder: '123' }
    })
    expect(wrapper.find('.f-input__input').attributes('placeholder')).toContain('123')
  })

  test('placeholderColor', () => {
    const wrapper = mount(FInput, {
      props: { placeholderColor: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('--f-input-placeholder-color: red')
  })

  test('clear', () => {
    const wrapper = mount(FInput, {
      props: { clear: true }
    })
    expect(wrapper.find('.f-input__clear-btn')).not.toBeNull()
  })

  test('search', () => {
    const wrapper = mount(FInput, {
      props: { search: true }
    })
    expect(wrapper.find('.f-input__search')).not.toBeNull()
  })

  test('readonly', () => {
    const wrapper = mount(FInput, {
      props: { readonly: true }
    })
    expect(wrapper.find('.f-input__input').attributes('readonly')).not.toBeNull()
  })
})
