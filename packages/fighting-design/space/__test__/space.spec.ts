import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FSpace } from '../index'
import { FIGHTING_SIZE } from '../../_tokens'

describe('FSpace', () => {
  test('class', () => {
    const wrapper = mount(FSpace, {
      slots: { default: '123' }
    })
    expect(wrapper.classes()).toContain('f-space')
  })

  test('vertical', () => {
    const wrapper = mount(FSpace, {
      props: { vertical: true },
      slots: { default: '123' }
    })
    expect(wrapper.classes()).toContain('f-space__vertical')
  })

  test('nowrap', () => {
    const wrapper = mount(FSpace, {
      props: { nowrap: true },
      slots: { default: '123' }
    })
    expect(wrapper.classes()).toContain('f-space__nowrap')
  })

  test('spacing', () => {
    FIGHTING_SIZE.forEach(item => {
      const wrapper = mount(FSpace, {
        props: { spacing: item },
        slots: { default: '123' }
      })
      expect(wrapper.classes()).toContain(`f-space__${item}`)
    })
  })
})
