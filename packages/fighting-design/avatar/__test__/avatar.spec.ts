import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FAvatar } from '../index'

describe('FAvatar', () => {
  test('class', () => {
    const wrapper = mount(FAvatar)
    expect(wrapper.classes()).toContain('f-avatar')
  })

  test('alt', () => {
    const wrapper = mount(FAvatar, {
      props: { alt: '图片' }
    })
    expect(wrapper.find('img').attributes('alt')).toContain('图片')
  })

  test('round', () => {
    const wrapper = mount(FAvatar, {
      props: { round: true }
    })
    expect(wrapper.classes()).toContain('f-avatar__round')
  })

  test('fit', () => {
    const fit = ['fill', 'contain', 'cover', 'none', 'scale-down'] as const
    fit.forEach(item => {
      const wrapper = mount(FAvatar, {
        props: { fit: item }
      })
      expect(wrapper.find('.f-avatar__img').classes()).toContain(`f-avatar__${item}`)
    })
  })

  test('size', () => {
    const fit = ['large', 'middle', 'small', 'mini'] as const
    fit.forEach(item => {
      const wrapper = mount(FAvatar, {
        props: { size: item }
      })
      expect(wrapper.find('.f-avatar__img').classes()).toContain(`f-avatar__${item}`)
    })
  })

  test('background', () => {
    const wrapper = mount(FAvatar, {
      props: { background: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('red')
  })
})
