import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FIcon } from '@fighting-design/fighting-components'

describe('FIcon', () => {
  test('icon', () => {
    const wrapper = mount(FIcon)
    expect(wrapper.classes()).toContain('f-icon')
  })

  test('icon', () => {
    const wrapper = mount(FIcon, {
      props: { icon: 'f-icon-credit-level-fill' }
    })
    expect(wrapper.classes()).toContain('f-icon-credit-level-fill')
  })

  test('fontClass', () => {
    const wrapper = mount(FIcon, {
      props: { fontClass: 'my-font' }
    })
    expect(wrapper.classes()).toContain('my-font')
  })

  test('color', () => {
    const wrapper = mount(FIcon, {
      props: { color: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('red')
  })

  test('size', () => {
    const wrapper = mount(FIcon, {
      props: { size: '15px' }
    })
    expect(wrapper.attributes('style')).toContain('15px')
  })
})
