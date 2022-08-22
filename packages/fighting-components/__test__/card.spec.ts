import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FCard } from '@fighting-design/fighting-components'

describe('FCard', () => {
  test('class', () => {
    const wrapper = mount(FCard)
    expect(wrapper.classes()).toContain('f-card')
  })

  test('round', () => {
    const wrapper = mount(FCard, {
      props: { round: true }
    })
    expect(wrapper.classes()).toContain('f-card-round')
  })

  test('title', () => {
    const wrapper = mount(FCard, {
      props: { title: '这是卡片标题' }
    })
    expect(wrapper.find('.f-card-header').text()).toContain('这是卡片标题')
  })

  test('round', () => {
    const wrapper = mount(FCard, {
      props: { round: true }
    })
    expect(wrapper.classes()).toContain('f-card-round')
  })

  test('shadow', () => {
    const shadow = ['never', 'hover', 'always'] as const
    shadow.forEach((item) => {
      const wrapper = mount(FCard, {
        props: { shadow: item }
      })
      expect(wrapper.classes()).toContain(`f-card-shadow-${item}`)
    })
  })

  test('padding', () => {
    const wrapper = mount(FCard, {
      props: { padding: '20px' }
    })
    expect(wrapper.find('.f-card-body').attributes('style')).toContain('20px')
  })
})
