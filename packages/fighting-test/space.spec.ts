import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FSpace } from '@fighting-design/fighting-components'

describe('FSpace', () => {
  test('class', () => {
    const wrapper = mount(FSpace)
    expect(wrapper.classes()).toContain('f-space')
  })

  test('position', () => {
    const type = ['start', 'center', 'end', 'baseline'] as const
    type.forEach((item) => {
      const wrapper = mount(FSpace, {
        props: { position: item }
      })
      expect(wrapper.classes()).toContain(`f-space-align-${item}`)
    })
  })

  test('vertical', () => {
    const wrapper = mount(FSpace, {
      props: { vertical: true }
    })
    expect(wrapper.classes()).toContain('f-space-vertical')
  })

  test('wrap', () => {
    const wrapper = mount(FSpace, {
      props: { wrap: true }
    })
    expect(wrapper.classes()).toContain('f-space-wrap')
  })

  test('spacing', () => {
    const wrapper = mount(FSpace, {
      props: { spacing: 'small' }
    })
    expect(wrapper.classes()).toContain('f-space-small-vertical')
  })

  test('spacing', () => {
    const wrapper = mount(FSpace, {
      props: { spacing: 20 }
    })
    expect(wrapper.attributes('style')).toContain('20px')
  })

  test('spacing', () => {
    const wrapper = mount(FSpace, {
      props: { spacing: [20, 'small'] }
    })
    expect(wrapper.attributes('style')).toContain('20px')
    expect(wrapper.classes()).toContain('f-space-small-vertical')
  })
})
