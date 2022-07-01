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
        props: { src: 'https://abc.com/1.jpg', icon: '', fit: item }
      })
      console.log(wrapper.find('img').classes())
      expect(wrapper.find('img').classes()).toContain(`f-avatar-${item}`)
    })
  })
})
