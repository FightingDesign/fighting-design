import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FImage } from '../index'

describe('FImage', () => {
  test('class', () => {
    const wrapper = mount(FImage)
    expect(wrapper.classes()).toContain('f-image')
  })

  test('alt', () => {
    const wrapper = mount(FImage, {
      props: { alt: '图片' }
    })
    expect(wrapper.find('img').attributes('alt')).toContain('图片')
  })

  test('draggable', () => {
    const wrapper = mount(FImage, {
      props: { draggable: false }
    })
    expect(wrapper.find('img').attributes('draggable')).toContain('false')
  })

  test('block', () => {
    const wrapper = mount(FImage, {
      props: { block: true }
    })
    expect(wrapper.classes()).toContain('f-image__block')
  })

  test('fit', () => {
    const fit = ['fill', 'contain', 'cover', 'none', 'scale-down'] as const
    fit.forEach(item => {
      const wrapper = mount(FImage, {
        props: { fit: item }
      })
      expect(wrapper.find('img').classes()).toContain(`f-image__${item}`)
    })
  })

  test('noSelect', () => {
    const wrapper = mount(FImage, {
      props: { noSelect: true }
    })
    expect(wrapper.find('img').classes()).toContain('f-image__select')
  })

  test('referrer-policy', () => {
    const wrapper = mount(FImage, {
      props: { referrerPolicy: 'no-referrer' }
    })
    expect(wrapper.find('img').attributes('referrer-policy')).toContain('no-referrer')
  })
})
