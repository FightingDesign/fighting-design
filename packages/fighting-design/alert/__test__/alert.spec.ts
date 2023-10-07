import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FAlert } from '../index'
import { FIGHTING_TYPE } from '../../_tokens'
import type { FightingType } from '../../_interface'

describe('FAlert', () => {
  test('class', () => {
    const wrapper = mount(FAlert)
    expect(wrapper.find('div').classes()).toContain('f-alert')
  })

  test('type', () => {
    FIGHTING_TYPE.forEach((item: FightingType): void => {
      const wrapper = mount(FAlert, {
        props: { type: item }
      })
      expect(wrapper.find('.f-alert').classes()).toContain(`f-alert__${item}`)
    })
  })

  test('fontSize', () => {
    const wrapper = mount(FAlert, {
      props: { fontSize: 20 }
    })
    expect(wrapper.find('.f-alert').attributes('style')).toContain(
      '--alert-font-size: 20px'
    )
  })

  test('fontSize', () => {
    const wrapper = mount(FAlert, {
      props: { fontSize: '32px' }
    })
    expect(wrapper.find('.f-alert').attributes('style')).toContain(
      '--alert-font-size: 32px'
    )
  })

  test('titleSize', () => {
    const wrapper = mount(FAlert, {
      props: { titleSize: 20 }
    })
    expect(wrapper.find('.f-alert').attributes('style')).toContain(
      '--alert-title-size: 20px'
    )
  })

  test('titleSize', () => {
    const wrapper = mount(FAlert, {
      props: { titleSize: '32px' }
    })
    expect(wrapper.find('.f-alert').attributes('style')).toContain(
      '--alert-title-size: 32px'
    )
  })

  test('bold', () => {
    const wrapper = mount(FAlert, {
      props: { bold: true }
    })
    expect(wrapper.find('.f-alert').classes()).toContain('f-alert__bold')
  })

  test('center', () => {
    const wrapper = mount(FAlert, {
      props: { center: true }
    })
    expect(wrapper.find('.f-alert').classes()).toContain('f-alert__center')
  })

  test('close', async () => {
    const wrapper = mount(FAlert, {
      props: { close: true }
    })
    expect(wrapper.find('.f-close-btn').exists()).toBe(true)
    await wrapper.find('.f-close-btn').trigger('click')
    expect(wrapper.find('.f-alert').exists()).not.toBeTruthy()
  })

  test('simple', () => {
    const wrapper = mount(FAlert, {
      props: { simple: true }
    })
    expect(wrapper.find('.f-alert').classes()).toContain('f-alert__simple')
  })

  test('title', () => {
    const wrapper = mount(FAlert, {
      props: { title: '这是一个标题' }
    })
    expect(wrapper.find('.f-alert').find('.f-alert__title').classes()).toContain(
      'f-alert__title'
    )
    expect(wrapper.find('.f-alert').find('.f-alert__title').text()).toContain(
      '这是一个标题'
    )
  })

  test('round', () => {
    const wrapper = mount(FAlert, {
      props: { round: true }
    })
    expect(wrapper.find('.f-alert').classes()).toContain('f-alert__round')
  })

  test('background', () => {
    const wrapper = mount(FAlert, {
      props: { background: 'red' }
    })
    expect(wrapper.find('.f-alert').attributes('style')).toContain(
      '--alert-background: red'
    )
  })

  test('color', () => {
    const wrapper = mount(FAlert, {
      props: { color: 'orange' }
    })
    expect(wrapper.find('.f-alert').attributes('style')).toContain(
      '--alert-color: orange'
    )
  })

  test('titleColor', () => {
    const wrapper = mount(FAlert, {
      props: { titleColor: 'red' }
    })
    expect(wrapper.find('.f-alert').attributes('style')).toContain(
      '--alert-title-color: red'
    )
  })

  test('fixed', () => {
    const wrapper = mount(FAlert, {
      props: { fixed: true }
    })
    expect(wrapper.find('.f-alert').classes()).toContain('f-alert__fixed')
  })

  test('alertList', () => {
    const wrapper = mount(FAlert, {
      props: { alertList: ['1111111', '222222'] }
    })
    expect(wrapper.find('.f-alert').find('.f-alert__list').classes()).toContain(
      'f-alert__list'
    )
  })
})
