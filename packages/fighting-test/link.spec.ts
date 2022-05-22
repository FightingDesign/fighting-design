import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { FLink } from '@fighting-design/fighting-components'

describe('FLink', () => {
  it('type', () => {
    const wrapper = mount(FLink, {
      props: { type: 'primary' }
    })
    expect(wrapper.classes()).toContain('f-link-primary')
  })

  it('href', () => {
    const wrapper = mount(FLink, {
      props: { href: 'https://tianyuhao.cn' }
    })
    expect(wrapper.attributes('href')).toContain('https://tianyuhao.cn')
  })

  it('size', () => {
    const wrapper = mount(FLink, {
      props: { size: '20px' }
    })
    expect(wrapper.attributes('style')).toContain('20px')
  })

  it('state', () => {
    const wrapper = mount(FLink, {
      props: { state: 'line' }
    })
    expect(wrapper.classes()).toContain('f-link-line')
  })

  it('prohibit', () => {
    const wrapper = mount(FLink, {
      props: { prohibit: true }
    })
    expect(wrapper.classes()).toContain('f-link-prohibit')
  })

  it('target', () => {
    const wrapper = mount(FLink, {
      props: { target: '_blank' }
    })
    expect(wrapper.attributes('target')).toContain('_blank')
  })

  it('color', () => {
    const wrapper = mount(FLink, {
      props: { color: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('red')
  })

  it('noCopy', () => {
    const wrapper = mount(FLink, {
      props: { noCopy: true }
    })
    expect(wrapper.classes()).toContain('f-link-noCopy')
  })
})
