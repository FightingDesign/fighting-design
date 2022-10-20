import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FLoading } from '../index'

describe('FLoading', () => {
  test('class', () => {
    const wrapper = mount(FLoading, {
      props: { show: true }
    })
    expect(wrapper.classes()).toContain('f-loading')
  })

  // test('text', () => {
  //   const wrapper = mount(FLoading, {
  //     props: { show: true, text: '加载中' }
  //   })
  //   expect(wrapper.find('.f-loading-title').text()).toContain('加载中')
  // })

  // test('icon', () => {
  //   const wrapper = mount(FLoading, {
  //     props: { show: true, icon: 'f-icon-abc' }
  //   })
  //   expect(wrapper.find('.f-loading-animation').attributes('class')).toContain('f-icon-abc')
  // })

  // test('font-color', () => {
  //   const wrapper = mount(FLoading, {
  //     props: { show: true, fontColor: 'red' }
  //   })
  //   expect(wrapper.find('.f-loading-title').attributes('style')).toContain('red')
  // })

  // test('icon-color', () => {
  //   const wrapper = mount(FLoading, {
  //     props: { show: true, iconColor: 'black' }
  //   })
  //   expect(wrapper.find('.f-icon').attributes('style')).toContain('black')
  // })

  // test('font-size', () => {
  //   const wrapper = mount(FLoading, {
  //     props: { show: true, fontSize: '20px' }
  //   })
  //   expect(wrapper.find('.f-loading-title').attributes('style')).toContain('20px')
  // })
})
