import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FLink } from '@fighting-design/fighting-components'

describe('FLink', () => {
  test('class', () => {
    const wrapper = mount(FLink)
    expect(wrapper.classes()).toContain('f-link')
  })

  test('type', () => {
    const type = ['default', 'primary', 'success', 'danger', 'warning'] as const
    type.forEach((item) => {
      const wrapper = mount(FLink, {
        props: { type: item }
      })
      expect(wrapper.classes()).toContain(`f-link-${item}`)
    })
  })

  test('href', () => {
    const wrapper = mount(FLink, {
      props: { href: 'https://tianyuhao.cn' }
    })
    expect(wrapper.attributes('href')).toContain('https://tianyuhao.cn')
  })

  test('size', () => {
    const wrapper = mount(FLink, {
      props: { size: '20px' }
    })
    expect(wrapper.attributes('style')).toContain('20px')
  })

  test('state', () => {
    const wrapper = mount(FLink, {
      props: { state: 'line' }
    })
    expect(wrapper.classes()).toContain('f-link-line')
  })

  test('prohibit', () => {
    const wrapper = mount(FLink, {
      props: { prohibit: true }
    })
    expect(wrapper.classes()).toContain('f-link-prohibit')
  })

  test('target', () => {
    const wrapper = mount(FLink, {
      props: { target: '_blank' }
    })
    expect(wrapper.attributes('target')).toContain('_blank')
  })

  test('color', () => {
    const wrapper = mount(FLink, {
      props: { color: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('red')
  })

  test('noCopy', () => {
    const wrapper = mount(FLink, {
      props: { noCopy: true }
    })
    expect(wrapper.classes()).toContain('f-link-noCopy')
  })
})
