import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FSpace } from '@fighting-design/fighting-components'

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
    expect(wrapper.classes()).toContain('f-space-vertical')
  })

  test('wrap', () => {
    const wrapper = mount(FSpace, {
      props: { wrap: true },
      slots: { default: '123' }
    })
    expect(wrapper.classes()).toContain('f-space-wrap')
  })

  test('spacing', () => {
    const type = ['large', 'middle', 'small', 'mini'] as const
    type.forEach((item) => {
      const wrapper = mount(FSpace, {
        props: { spacing: item },
        slots: { default: '123' }
      })
      expect(wrapper.classes()).toContain(`f-space-${item}`)
    })
  })
})
