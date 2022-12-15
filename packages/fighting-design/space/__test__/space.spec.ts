import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FSpace } from '../index'

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
    const type = ['large', 'middle', 'small', 'mini'] as const
    type.forEach(item => {
      const wrapper = mount(FSpace, {
        props: { spacing: item },
        slots: { default: '123' }
      })
      expect(wrapper.classes()).toContain(`f-space__${item}`)
    })
  })
})
