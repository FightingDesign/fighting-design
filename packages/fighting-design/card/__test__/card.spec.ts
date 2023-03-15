import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FCard } from '../index'
import type { CardShadow } from '../index'

describe('FCard', () => {
  test('class', () => {
    const wrapper = mount(FCard)
    expect(wrapper.find('div').classes()).toContain('f-card')
  })

  test('round', () => {
    const wrapper = mount(FCard, {
      props: { round: true }
    })
    expect(wrapper.find('.f-card').classes()).toContain('f-card__round')
  })

  test('title', () => {
    const wrapper = mount(FCard, {
      props: { title: '这是卡片标题' }
    })

    expect(wrapper.find('.f-card').find('.f-card__header').text()).toContain(
      '这是卡片标题'
    )
    expect(wrapper.find('.f-card').find('.f-card__header').attributes('role')).toBe(
      'heading'
    )
  })

  test('round', () => {
    const wrapper = mount(FCard, {
      props: { round: true }
    })
    expect(wrapper.find('.f-card').classes()).toContain('f-card__round')
  })

  test('shadow', () => {
    const shadows: CardShadow[] = ['hover', 'always']
    shadows.forEach((item: CardShadow): void => {
      const wrapper = mount(FCard, {
        props: { shadow: item }
      })
      expect(wrapper.find('.f-card').classes()).toContain(`f-card__${item}`)
    })
  })

  test('padding', () => {
    const wrapper = mount(FCard, {
      props: { padding: '20px' }
    })
    expect(wrapper.find('.f-card').attributes('style')).toContain('--card-padding: 20px')
  })

  test('padding', () => {
    const wrapper = mount(FCard, {
      props: { padding: 30 }
    })
    expect(wrapper.find('.f-card').attributes('style')).toContain('--card-padding: 30px')
  })

  test('background', () => {
    const wrapper = mount(FCard, {
      props: { background: 'red' }
    })
    expect(wrapper.find('.f-card').attributes('style')).toContain(
      '--card-background: red'
    )
  })

  test('titleColor', () => {
    const wrapper = mount(FCard, {
      props: { titleColor: 'red' }
    })
    expect(wrapper.find('.f-card').attributes('style')).toContain(
      '--card-title-color: red'
    )
  })

  test('titleBold', () => {
    const wrapper = mount(FCard, {
      props: { title: '标题', titleBold: true }
    })
    expect(wrapper.find('.f-card__title').classes()).toContain('f-card__title-bold')
  })

  test('close', () => {
    const wrapper = mount(FCard, {
      props: { title: '标题', close: true }
    })
    expect(wrapper.find('.f-close-btn').classes()).toContain('f-close-btn')
  })
})
