import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FAvatar } from '../index'
import { FIGHTING_SIZE, FIGHTING_FIT } from '../../_tokens'
import type { FightingFit, FightingSize } from '../../_interface'

describe('FAvatar', () => {
  test('class', () => {
    const wrapper = mount(FAvatar)
    expect(wrapper.classes()).toContain('f-avatar')
    expect(wrapper.attributes('role')).toBe('img')
  })

  test('alt', () => {
    const wrapper = mount(FAvatar, {
      props: { alt: '图片' }
    })
    expect(wrapper.find('img').attributes('alt')).toBe('图片')
  })

  test('round', () => {
    const wrapper = mount(FAvatar, {
      props: { round: true }
    })
    expect(wrapper.classes()).toContain('f-avatar__round')
  })

  test('fit', () => {
    FIGHTING_FIT.forEach((item: FightingFit): void => {
      const wrapper = mount(FAvatar, {
        props: { fit: item }
      })
      expect(wrapper.classes()).toContain(`f-avatar__${item}`)
    })
  })

  test('size', () => {
    FIGHTING_SIZE.forEach((item: FightingSize): void => {
      const wrapper = mount(FAvatar, {
        props: { size: item }
      })
      expect(wrapper.classes()).toContain(`f-avatar__${item}`)
    })
  })

  test('background', () => {
    const wrapper = mount(FAvatar, {
      props: { background: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('red')
  })
})
