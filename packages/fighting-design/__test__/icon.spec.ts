import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FIcon } from '../index'

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

  test('font-class', () => {
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

  test('size', () => {
    const wrapper = mount(FIcon, {
      props: { size: 16 }
    })
    expect(wrapper.attributes('style')).toContain('16px')
  })

  test('on click', async () => {
    const wrapper = mount(FIcon)
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })
})
