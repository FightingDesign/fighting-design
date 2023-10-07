import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FToolbar } from '../index'
import { FIGHTING_SIZE } from '../../_tokens'

describe('FToolbar', () => {
  test('class', () => {
    const wrapper = mount(FToolbar)
    expect(wrapper.classes()).toContain('f-toolbar')
  })

  test('round', () => {
    const wrapper = mount(FToolbar, {
      props: { round: true }
    })
    expect(wrapper.classes()).toContain('f-toolbar__round')
  })

  test('size', () => {
    FIGHTING_SIZE.forEach(item => {
      const wrapper = mount(FToolbar, {
        props: { size: item }
      })
      expect(wrapper.classes()).toContain(`f-toolbar__${item}`)
    })
  })

  test('background', () => {
    const wrapper = mount(FToolbar, {
      props: { background: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('--toolbar-background: red')
  })

  test('textColor', () => {
    const wrapper = mount(FToolbar, {
      props: { textColor: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('--toolbar-text-color: red')
  })

  test('fixed', () => {
    const wrapper = mount(FToolbar, {
      props: { fixed: true }
    })
    expect(wrapper.classes()).toContain('f-toolbar__fixed')
  })

  test('width', () => {
    const wrapper = mount(FToolbar, {
      props: { width: 20 }
    })
    expect(wrapper.attributes('style')).toContain('--toolbar-width: 20px')
  })

  test('width', () => {
    const wrapper = mount(FToolbar, {
      props: { width: '30px' }
    })
    expect(wrapper.attributes('style')).toContain('--toolbar-width: 30px')
  })

  test('height', () => {
    const wrapper = mount(FToolbar, {
      props: { height: 20 }
    })
    expect(wrapper.attributes('style')).toContain('--toolbar-height: 20px')
  })

  test('height', () => {
    const wrapper = mount(FToolbar, {
      props: { height: '30px' }
    })
    expect(wrapper.attributes('style')).toContain('--toolbar-height: 30px')
  })

  test('slot', () => {
    const wrapper = mount(FToolbar, {
      slots: { default: '插槽' }
    })
    expect(wrapper.text()).toContain('插槽')
  })
})
