import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FImage } from '../index'
import { FIGHTING_FIT } from '../../_tokens'
import type { ImageFit } from '../index'

describe('FImage', () => {
  test('class', () => {
    const wrapper = mount(FImage)
    expect(wrapper.classes()).toContain('f-image')
    expect(wrapper.attributes('role')).toContain('img')
  })

  test('alt', () => {
    const wrapper = mount(FImage, {
      props: { alt: '图片' }
    })
    expect(wrapper.find('img').attributes('alt')).toContain('图片')
  })

  // test('draggable', () => {
  //   const wrapper = mount(FImage, {
  //     props: { draggable: false }
  //   })
  //   expect(wrapper.find('img').attributes('draggable')).toContain('false')
  // })

  test('block', () => {
    const wrapper = mount(FImage, {
      props: { block: true }
    })
    expect(wrapper.classes()).toContain('f-image__block')
  })

  test('fit', () => {
    FIGHTING_FIT.forEach((item: ImageFit): void => {
      const wrapper = mount(FImage, {
        props: { fit: item }
      })
      expect(wrapper.classes()).toContain(`f-image__${item}`)
    })
  })

  test('select', () => {
    const wrapper = mount(FImage, {
      props: { select: true }
    })
    expect(wrapper.classes()).toContain('f-image__select')
  })

  test('referrer-policy', () => {
    const wrapper = mount(FImage, {
      props: { referrerPolicy: 'no-referrer' }
    })
    expect(wrapper.find('img').attributes('referrer-policy')).toContain('no-referrer')
  })
})
