import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FTag } from '../index'
import { FIGHTING_SIZE, FIGHTING_TYPE } from '../../_tokens'
import type { FightingType } from '../../_interface'

describe('FTag', () => {
  test('class', () => {
    const wrapper = mount(FTag)
    expect(wrapper.find('.f-tag').classes()).toContain('f-tag')
  })

  test('type', () => {
    FIGHTING_TYPE.forEach((item: FightingType): void => {
      const wrapper = mount(FTag, {
        props: { type: item }
      })
      expect(wrapper.find('.f-tag').classes()).toContain(`f-tag__${item}`)
    })
  })

  test('line', () => {
    const wrapper = mount(FTag, {
      props: { line: true }
    })
    expect(wrapper.find('.f-tag').classes()).toContain('f-tag__line')
  })

  test('round', () => {
    const wrapper = mount(FTag, {
      props: { round: true }
    })
    expect(wrapper.find('.f-tag').classes()).toContain('f-tag__round')
  })

  test('background', () => {
    const wrapper = mount(FTag, {
      props: { background: 'red' }
    })
    expect(wrapper.find('.f-tag').attributes('style')).toContain('red')
  })

  test('color', () => {
    const wrapper = mount(FTag, {
      props: { color: 'orange' }
    })
    expect(wrapper.find('.f-tag').attributes('style')).toContain('orange')
  })

  test('size', () => {
    FIGHTING_SIZE.forEach(item => {
      const wrapper = mount(FTag, {
        props: { size: item }
      })
      expect(wrapper.find('.f-tag').classes()).toContain(`f-tag__${item}`)
    })
  })

  test('simple', () => {
    const wrapper = mount(FTag, {
      props: { simple: true }
    })
    expect(wrapper.find('.f-tag').classes()).toContain('f-tag__simple')
  })

  test('block', () => {
    const wrapper = mount(FTag, {
      props: { block: true }
    })
    expect(wrapper.find('.f-tag').classes()).toContain('f-tag__block')
  })
})
