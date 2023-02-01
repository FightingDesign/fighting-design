import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FText } from '../index'
import { FIGHTING_TYPE } from '../../_tokens'

describe('FText', () => {
  test('class', () => {
    const wrapper = mount(FText)
    expect(wrapper.classes()).toContain('f-text')
  })

  test('type', () => {
    FIGHTING_TYPE.forEach(item => {
      const wrapper = mount(FText, {
        props: { type: item }
      })
      expect(wrapper.classes()).toContain(`f-text__${item}`)
    })
  })

  test('size', () => {
    const wrapper = mount(FText, {
      props: { size: '20px' }
    })
    expect(wrapper.attributes('style')).toContain('20px')
  })

  test('color', () => {
    const wrapper = mount(FText, {
      props: { color: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('red')
  })

  test('background', () => {
    const wrapper = mount(FText, {
      props: { background: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('red')
  })

  test('block', () => {
    const wrapper = mount(FText, {
      props: { block: true }
    })
    expect(wrapper.classes()).toContain('f-text__block')
  })

  test('spacing', () => {
    const wrapper = mount(FText, {
      props: { spacing: '100px' }
    })
    expect(wrapper.attributes('style')).toContain('--text-spacing: 100px')
  })

  test('lineHeight', () => {
    const wrapper = mount(FText, {
      props: { lineHeight: '100px' }
    })
    expect(wrapper.attributes('style')).toContain('--text-line-height: 100px')
  })

  test('textIndent', () => {
    const wrapper = mount(FText, {
      props: { indent: '100px' }
    })
    expect(wrapper.attributes('style')).toContain('--text-indent: 100px')
  })

  test('bold', () => {
    const wrapper = mount(FText, {
      props: { bold: true }
    })
    expect(wrapper.classes()).toContain('f-text__bold')
  })

  test('decoration', () => {
    const wrapper = mount(FText, {
      props: { decoration: 'underline' }
    })
    expect(wrapper.attributes('style')).toContain('text-decoration')
  })
})
