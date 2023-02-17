import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FList } from '../index'
import { FIGHTING_SIZE } from '../../_tokens'
import type { FightingSize } from '../../_interface'

describe('FList', () => {
  test('class', () => {
    const wrapper = mount(FList)
    expect(wrapper.classes()).toContain('f-list')
    expect(wrapper.attributes('role')).toContain('list')
  })

  test('zebra', () => {
    const wrapper = mount(FList, {
      props: { zebra: true }
    })
    expect(wrapper.classes()).toContain('f-list__zebra')
  })

  test('center', () => {
    const wrapper = mount(FList, {
      props: { center: true }
    })
    expect(wrapper.classes()).toContain('f-list__center')
  })

  test('borderColor', () => {
    const wrapper = mount(FList, {
      props: { borderColor: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('--list-border-color: red')
  })

  test('size', () => {
    FIGHTING_SIZE.forEach((item: FightingSize): void => {
      const wrapper = mount(FList, {
        props: { size: item }
      })
      expect(wrapper.classes()).toContain(`f-list__${item}`)
    })
  })

  test('maxHeight', () => {
    const wrapper = mount(FList, {
      props: { maxHeight: 20 }
    })
    expect(wrapper.attributes('style')).toContain('--list-max-height: 20px')
  })

  test('maxHeight', () => {
    const wrapper = mount(FList, {
      props: { maxHeight: '30px' }
    })
    expect(wrapper.attributes('style')).toContain('--list-max-height: 30px')
  })

  test('zebraColor', () => {
    const wrapper = mount(FList, {
      props: { zebraColor: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('--list-zebra-color: red')
  })

  test('header', () => {
    const wrapper = mount(FList, {
      slots: { header: '123' }
    })
    expect(wrapper.find('.f-list__header').text()).toContain('123')
  })

  test('footer', () => {
    const wrapper = mount(FList, {
      slots: { footer: '123' }
    })
    expect(wrapper.find('.f-list__footer').text()).toContain('123')
  })

  test('slot', () => {
    const wrapper = mount(FList, {
      slots: { default: '123' }
    })
    expect(wrapper.text()).toContain('123')
  })
})
