import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FText } from '@fighting-design/fighting-components'

describe('FText', () => {
  test('class', () => {
    const wrapper = mount(FText)
    expect(wrapper.classes()).toContain('f-text')
  })

  test('type', () => {
    const type = ['default', 'primary', 'success', 'danger', 'warning'] as const
    type.forEach((item) => {
      const wrapper = mount(FText, {
        props: { type: item }
      })
      expect(wrapper.classes()).toContain(`f-text-${item}`)
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
    expect(wrapper.classes()).toContain('f-text-block')
  })

  test('spacing', () => {
    const wrapper = mount(FText, {
      props: { spacing: '100px' }
    })
    expect(wrapper.attributes('style')).toContain('letter-spacing')
  })

  test('lineHeight', () => {
    const wrapper = mount(FText, {
      props: { lineHeight: '100px' }
    })
    expect(wrapper.attributes('style')).toContain('line-height')
  })

  test('textIndent', () => {
    const wrapper = mount(FText, {
      props: { textIndent: '100px' }
    })
    expect(wrapper.attributes('style')).toContain('text-indent')
  })

  test('bold', () => {
    const wrapper = mount(FText, {
      props: { bold: true }
    })
    expect(wrapper.classes()).toContain('f-text-bold')
  })

  test('decoration', () => {
    const wrapper = mount(FText, {
      props: { decoration: 'underline' }
    })
    expect(wrapper.attributes('style')).toContain('text-decoration')
  })
})
