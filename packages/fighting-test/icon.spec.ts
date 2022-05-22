import { FIcon } from '@fighting-design/fighting-components'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('FIcon', () => {
  it('icon', () => {
    const wrapper = mount(FIcon, {
      props: { icon: 'f-icon-credit-level-fill' }
    })
    expect(wrapper.classes()).toContain('f-icon-credit-level-fill')
  })

  it('fontClass', () => {
    const wrapper = mount(FIcon, {
      props: { fontClass: 'my-font' }
    })
    expect(wrapper.classes()).toContain('my-font')
  })

  it('color', () => {
    const wrapper = mount(FIcon, {
      props: { color: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('red')
  })

  it('size', () => {
    const wrapper = mount(FIcon, {
      props: { size: '15px' }
    })
    expect(wrapper.attributes('style')).toContain('15px')
  })

  it('opacity', () => {
    const wrapper = mount(FIcon, {
      props: { opacity: '0.5' }
    })
    expect(wrapper.attributes('style')).toContain('0.5')
  })
})
