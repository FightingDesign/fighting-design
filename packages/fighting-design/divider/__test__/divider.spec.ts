import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FDivider } from '../index'
import type { DividerType, DividerPosition } from '../index'

describe('FDivider', () => {
  test('class', () => {
    const wrapper = mount(FDivider)
    expect(wrapper.classes()).toContain('f-divider')
  })

  test('slots', () => {
    const wrapper = mount(FDivider, {
      slots: {
        default: '分割线'
      }
    })
    expect(wrapper.find('.f-divider__text').text()).toBe('分割线')
  })

  test('vertical', () => {
    const wrapper = mount(FDivider, {
      props: { vertical: true }
    })
    expect(wrapper.classes()).toContain('f-divider__vertical')
  })

  test('position', () => {
    const positions: DividerPosition[] = ['left', 'center', 'right']
    positions.forEach((item: DividerPosition): void => {
      const wrapper = mount(FDivider, {
        props: { position: item }
      })
      expect(wrapper.classes()).toContain(`f-divider__${item}`)
    })
  })

  test('fontColor', () => {
    const wrapper = mount(FDivider, {
      slots: { default: '分割线' },
      props: { fontColor: 'green' }
    })
    expect(wrapper.attributes('style')).toContain('--divider-font-color: green')
  })

  test('background', () => {
    const wrapper = mount(FDivider, {
      slots: { default: '分割线' },
      props: { background: 'green' }
    })
    expect(wrapper.attributes('style')).toContain('--divider-background: green')
  })

  test('margin', () => {
    const wrapper = mount(FDivider, {
      props: { margin: '50px' }
    })
    expect(wrapper.attributes('style')).toContain('--divider-margin: 50px')
  })

  test('color', () => {
    const wrapper = mount(FDivider, {
      props: { color: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('--divider-color: red')
  })

  test('type', () => {
    const types: DividerType[] = ['dashed', 'dotted', 'double', 'solid']
    types.forEach((item: DividerType): void => {
      const wrapper = mount(FDivider, {
        props: { type: item }
      })
      expect(wrapper.attributes('style')).toContain(`--divider-type: ${item}`)
    })
  })
})
