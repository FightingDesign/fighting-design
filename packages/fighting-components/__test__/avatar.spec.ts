import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FAvatar } from '@fighting-design/fighting-components'

describe('FAvatar', () => {
  test('class', () => {
    const wrapper = mount(FAvatar)
    expect(wrapper.classes()).toContain('f-avatar')
  })

  test('src', () => {
    const wrapper = mount(FAvatar, {
      props: { src: 'https://abc.com/1.jpg' }
    })
    expect(wrapper.find('img').attributes('src')).toContain(
      'https://abc.com/1.jpg'
    )
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
    expect(wrapper.classes()).toContain('f-avatar-round')
  })

  test('fit', () => {
    const fit = ['fill', 'contain', 'cover', 'none', 'scale-down'] as const
    fit.forEach((item) => {
      const wrapper = mount(FAvatar, {
        props: { fit: item }
      })
      expect(wrapper.find('img').classes()).toContain(`f-avatar-${item}`)
    })
  })

  test('size', () => {
    const fit = ['large', 'middle', 'small', 'mini'] as const
    fit.forEach((item) => {
      const wrapper = mount(FAvatar, {
        props: { size: item }
      })
      expect(wrapper.find('img').classes()).toContain(`f-avatar-${item}`)
    })
  })

  test('background', () => {
    const wrapper = mount(FAvatar, {
      props: { background: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('red')
  })

  test('icon', () => {
    const wrapper = mount(FAvatar, {
      props: { icon: 'f-icon-default-template' }
    })
    expect(wrapper.find('.f-icon').classes()).toContain(
      'f-icon-default-template'
    )
  })

  test('icon-size', () => {
    const wrapper = mount(FAvatar, {
      props: { icon: 'f-icon-default-template', fontSize: '12px' }
    })
    expect(wrapper.find('.f-icon').attributes('style')).toContain('12px')
  })

  test('icon-color', () => {
    const wrapper = mount(FAvatar, {
      props: { icon: 'f-icon-default-template', fontColor: 'red' }
    })
    expect(wrapper.find('.f-icon').attributes('style')).toContain('red')
  })
})
