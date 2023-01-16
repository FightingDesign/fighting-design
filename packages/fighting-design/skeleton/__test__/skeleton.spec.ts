import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FSkeleton } from '../index'
import { FIGHTING_SIZE } from '../../_tokens'

describe('FSkeleton', () => {
  test('class', () => {
    const wrapper = mount(FSkeleton, {
      props: { loading: true },
      slots: { default: '123' }
    })
    expect(wrapper.find('div').classes()).toContain('f-skeleton')
    expect(wrapper.find('.f-skeleton').attributes('role')).toContain('section')
  })

  test('round', () => {
    const wrapper = mount(FSkeleton, {
      props: { loading: true, round: true },
      slots: { default: '123' }
    })
    expect(wrapper.find('.f-skeleton').classes()).toContain('f-skeleton__round')
  })

  test('animated', () => {
    const wrapper = mount(FSkeleton, {
      props: { loading: true, animated: true },
      slots: { default: '123' }
    })
    expect(wrapper.find('.f-skeleton').classes()).toContain('f-skeleton__animated')
  })

  test('size', () => {
    FIGHTING_SIZE.forEach(item => {
      const wrapper = mount(FSkeleton, {
        props: { loading: true, size: item },
        slots: { default: '123' }
      })
      expect(wrapper.find('.f-skeleton').classes()).toContain(`f-skeleton__${item}`)
    })
  })
})
