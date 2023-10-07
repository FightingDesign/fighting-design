import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FTextarea } from '../index'
import type { TextareaResize } from '../index'

describe('Textarea', () => {
  test('class', () => {
    const wrapper = mount(FTextarea)
    expect(wrapper.classes()).toContain('f-textarea')
    expect(wrapper.find('textarea').classes()).toContain('f-textarea__textarea')
  })

  test('rows', () => {
    const wrapper = mount(FTextarea, {
      props: { rows: 5 }
    })
    expect(wrapper.find('.f-textarea__textarea').attributes('rows')).toContain('5')
  })

  test('disabled', () => {
    const wrapper = mount(FTextarea, {
      props: { disabled: true }
    })
    expect(wrapper.find('.f-textarea__textarea').attributes('disabled')).toBe('')
  })

  test('autofocus', () => {
    const wrapper = mount(FTextarea, {
      props: { autofocus: true }
    })
    expect(wrapper.find('.f-textarea__textarea').attributes('autofocus')).toBe('')
  })

  test('name', () => {
    const wrapper = mount(FTextarea)
    expect(wrapper.find('.f-textarea__textarea').attributes('name')).toBe('f-textarea')
  })

  test('name', () => {
    const wrapper = mount(FTextarea, {
      props: { name: 'abc' }
    })
    expect(wrapper.find('.f-textarea__textarea').attributes('name')).toBe('abc')
  })

  test('placeholder', () => {
    const wrapper = mount(FTextarea, {
      props: { placeholder: 'abc' }
    })
    expect(wrapper.find('.f-textarea__textarea').attributes('placeholder')).toBe('abc')
  })

  test('readonly', () => {
    const wrapper = mount(FTextarea, {
      props: { readonly: true }
    })
    expect(wrapper.find('.f-textarea__textarea').attributes('readonly')).toBe('')
  })

  test('resize', () => {
    const resizes: TextareaResize[] = ['none', 'both', 'horizontal', 'vertical']
    resizes.forEach((item: TextareaResize): void => {
      const wrapper = mount(FTextarea, {
        props: { resize: item }
      })
      expect(wrapper.attributes('style')).toContain(`--textarea-resize: ${item}`)
    })
  })
})
