import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FCard } from '../index'

describe('FCard', () => {
  test('class', () => {
    const wrapper = mount(FCard)
    expect(wrapper.classes()).toContain('f-card')
  })

  test('round', () => {
    const wrapper = mount(FCard, {
      props: { round: true }
    })
    expect(wrapper.classes()).toContain('f-card__round')
  })

  test('title', () => {
    const wrapper = mount(FCard, {
      props: { title: '这是卡片标题' }
    })
    expect(wrapper.find('.f-card__header').text()).toContain('这是卡片标题')
  })

  test('round', () => {
    const wrapper = mount(FCard, {
      props: { round: true }
    })
    expect(wrapper.classes()).toContain('f-card__round')
  })

  test('shadow', () => {
    const shadow = ['never', 'hover', 'always'] as const
    shadow.forEach((item) => {
      const wrapper = mount(FCard, {
        props: { shadow: item }
      })
      expect(wrapper.classes()).toContain(`f-card__shadow-${item}`)
    })
  })

  test('padding', () => {
    const wrapper = mount(FCard, {
      props: { padding: '20px' }
    })
    expect(wrapper.find('.f-card__body').attributes('style')).toContain('20px')
  })
})
