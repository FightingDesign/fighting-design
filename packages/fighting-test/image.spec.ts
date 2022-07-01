import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FImage } from '@fighting-design/fighting-components'

describe('FImage', () => {
  test('class', () => {
    const wrapper = mount(FImage)
    expect(wrapper.classes()).toContain('f-image')
  })

  test('src', () => {
    const wrapper = mount(FImage, {
      props: { src: 'https://abc.com/1.jpg' }
    })
    expect(wrapper.find('img').attributes('src')).toContain(
      'https://abc.com/1.jpg'
    )
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

  test('width', () => {
    const wrapper = mount(FImage, {
      props: { width: '200px' }
    })
    expect(wrapper.find('img').attributes('style')).toContain('200px')
  })

  test('height', () => {
    const wrapper = mount(FImage, {
      props: { height: '300px' }
    })
    expect(wrapper.find('img').attributes('style')).toContain('300px')
  })

  test('block', () => {
    const wrapper = mount(FImage, {
      props: { block: true }
    })
    expect(wrapper.classes()).toContain('f-image-block')
  })

  test('fit', () => {
    const wrapper = mount(FImage, {
      props: { fit: 'cover' }
    })
    expect(wrapper.find('img').classes()).toContain('f-image-cover')
  })

  test('fit', () => {
    const fit = ['fill', 'contain', 'cover', 'none', 'scale-down'] as const
    fit.forEach((item) => {
      const wrapper = mount(FImage, {
        props: { fit: item }
      })
      expect(wrapper.find('img').classes()).toContain(`f-image-${item}`)
    })
  })

  test('noSelect', () => {
    const wrapper = mount(FImage, {
      props: { noSelect: true }
    })
    expect(wrapper.find('img').classes()).toContain('f-image-select')
  })

  test('referrer-policy', () => {
    const wrapper = mount(FImage, {
      props: { referrerPolicy: 'no-referrer' }
    })
    expect(wrapper.find('img').attributes('referrer-policy')).toContain(
      'no-referrer'
    )
  })

  test('round', () => {
    const wrapper = mount(FImage, {
      props: { round: '20px' }
    })
    expect(wrapper.find('img').attributes('style')).toContain('20px')
  })
})
