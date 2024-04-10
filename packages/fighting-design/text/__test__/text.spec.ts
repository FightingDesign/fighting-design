import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FText } from '../index'
import { FIGHTING_TYPE } from '../../_tokens'
import type { TextDecoration } from '../src/interface'

describe('FText', () => {
  test('should render slot', () => {
    const wrapper = mount(FText, {
      slots: { default: 'text' }
    })
    expect(wrapper.text()).toContain('text')
  })

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

  test('size is string', () => {
    const wrapper = mount(FText, {
      props: { size: '20px' }
    })
    expect(wrapper.attributes('style')).toContain('--text-size: 20px')
  })

  test('size is number', () => {
    const wrapper = mount(FText, {
      props: { size: 20 }
    })
    expect(wrapper.attributes('style')).toContain('--text-size: 20px')
  })

  test('color', () => {
    const wrapper = mount(FText, {
      props: { color: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('--text-color: red')
  })

  test('background', () => {
    const wrapper = mount(FText, {
      props: { background: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('--text-background: red')
  })

  test('block', () => {
    const wrapper = mount(FText, {
      props: { block: true }
    })
    expect(wrapper.classes()).toContain('f-text__block')
  })

  test('spacing is string', () => {
    const wrapper = mount(FText, {
      props: { spacing: '100px' }
    })
    expect(wrapper.attributes('style')).toContain('--text-spacing: 100px')
  })

  test('spacing is number', () => {
    const wrapper = mount(FText, {
      props: { spacing: 100 }
    })
    expect(wrapper.attributes('style')).toContain('--text-spacing: 100px')
  })

  test('lineHeight is string', () => {
    const wrapper = mount(FText, {
      props: { lineHeight: '100px' }
    })
    expect(wrapper.attributes('style')).toContain('--text-line-height: 100px')
  })

  test('lineHeight is number', () => {
    const wrapper = mount(FText, {
      props: { lineHeight: 100 }
    })
    expect(wrapper.attributes('style')).toContain('--text-line-height: 100px')
  })

  test('indent is string', () => {
    const wrapper = mount(FText, {
      props: { indent: '100px' }
    })
    expect(wrapper.attributes('style')).toContain('--text-indent: 100px')
  })

  test('indent is number', () => {
    const wrapper = mount(FText, {
      props: { indent: 100 }
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
    const decoration: TextDecoration[] = ['overline', 'line-through', 'underline']
    decoration.forEach(item => {
      const wrapper = mount(FText, {
        props: { decoration: item }
      })
      expect(wrapper.attributes('style')).toContain(`--text-decoration: ${item}`)
    })
  })

  test('padding is string', () => {
    const wrapper = mount(FText, {
      props: { padding: '10px' }
    })
    expect(wrapper.attributes('style')).toContain('--text-padding: 10px')
  })

  test('padding is number', () => {
    const wrapper = mount(FText, {
      props: { padding: 10 }
    })
    expect(wrapper.attributes('style')).toContain('--text-padding: 10px')
  })

  test('width is string', () => {
    const wrapper = mount(FText, {
      props: { width: '100px' }
    })
    expect(wrapper.attributes('style')).toContain('--text-width: 100px')
  })

  test('width is number', () => {
    const wrapper = mount(FText, {
      props: { width: 100 }
    })
    expect(wrapper.attributes('style')).toContain('--text-width: 100px')
  })

  test('ellipsis', () => {
    const wrapper = mount(FText, {
      props: { ellipsis: true }
    })
    expect(wrapper.classes()).toContain('f-text__ellipsis')
  })

  test('center', () => {
    const wrapper = mount(FText, {
      props: { center: true }
    })
    expect(wrapper.classes()).toContain('f-text__center')
  })
})
