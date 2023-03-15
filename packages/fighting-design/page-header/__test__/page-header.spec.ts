import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FPageHeader } from '../index'

describe('FPageHeader', () => {
  test('class', () => {
    const wrapper = mount(FPageHeader)
    expect(wrapper.classes()).toContain('f-page-header')
  })

  test('title', () => {
    const wrapper = mount(FPageHeader, {
      props: { title: '标题' }
    })
    expect(wrapper.find('.f-page-header__main-title').text()).toBe('标题')
  })

  test('titleBold', () => {
    const wrapper = mount(FPageHeader, {
      props: { titleBold: true }
    })
    expect(wrapper.find('.f-page-header__main-title').classes()).toContain(
      'f-page-header__main-title-bold'
    )
  })

  test('titleColor', () => {
    const wrapper = mount(FPageHeader, {
      props: { titleColor: 'red' }
    })
    expect(wrapper.find('.f-page-header__main-title').attributes('style')).toContain(
      'color: red'
    )
  })

  test('titleCenter', () => {
    const wrapper = mount(FPageHeader, {
      props: { titleCenter: true }
    })
    expect(wrapper.find('.f-page-header__main').classes()).toContain(
      'f-page-header__main-center'
    )
  })

  test('subtitle', () => {
    const wrapper = mount(FPageHeader, {
      props: { subtitle: '副标题' }
    })
    expect(wrapper.find('.f-page-header__main-subtitle').text()).toBe('副标题')
  })
})
