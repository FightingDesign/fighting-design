import { mount } from '@vue/test-utils'
import { vi, describe, expect, test } from 'vitest'
import { FCard } from '../index'
import type { CardShadow } from '../index'

describe('FCard', () => {
  test('class', () => {
    const wrapper = mount(FCard)
    expect(wrapper.find('div').classes()).toContain('f-card')
  })
  
  test('title', () => {
    const wrapper = mount(FCard, {
      props: { title: '这是卡片标题' }
    })
    expect(wrapper.find('.f-card__title').text()).toContain('这是卡片标题')
    expect(wrapper.find('.f-card__header').attributes('role')).toBe('heading')
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

  test('borderColor', () => {
    const wrapper = mount(FCard, {
      props: { borderColor: 'red' }
    })
    expect(wrapper.find('.f-card').attributes('style')).toContain('--card-border-color: red')
  })

  test('background', () => {
    const wrapper = mount(FCard, {
      props: { background: 'red' }
    })
    expect(wrapper.find('.f-card').attributes('style')).toContain('--card-background: red')
  })

  test('titleColor', () => {
    const wrapper = mount(FCard, {
      props: { titleColor: 'red' }
    })
    expect(wrapper.find('.f-card').attributes('style')).toContain('--card-title-color: red')
  })

  test('titleBold', () => {
    const wrapper = mount(FCard, {
      props: { title: '标题', titleBold: true }
    })
    expect(wrapper.find('.f-card__title').classes()).toContain('f-card__title-bold')
  })

  test('close', async () => {
    const wrapper = mount(FCard, {
      props: { title: '标题', close: true }
    })
    expect(wrapper.find('.f-card').exists()).toBeTruthy()
    await wrapper.find('.f-close-btn').trigger('click')
    expect(wrapper.find('.f-card').exists()).toBeFalsy()
  })

  test('onClose', async () => {
    const onClose = vi.fn()
    const wrapper = mount(FCard, {
      props: { title: '标题', close: true, onClose }
    })
    await wrapper.find('.f-close-btn').trigger('click')
    expect(onClose).toHaveBeenCalled()
  })

  test('default slot', () => {
    const wrapper = mount(FCard, {
      slots: {
        default: '这是卡片内容'
      }
    })
    expect(wrapper.find('.f-card__body').text()).toContain('这是卡片内容')
  })

  test('header slot', () => {
    const wrapper = mount(FCard, {
      slots: {
        header: '这是卡片头部'
      }
    })
    expect(wrapper.find('.f-card__header').text()).toContain('这是卡片头部')
  })
})
