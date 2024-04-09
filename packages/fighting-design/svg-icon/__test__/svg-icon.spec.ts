import { markRaw } from 'vue'
import { mount } from '@vue/test-utils'
import { vi, describe, expect, test } from 'vitest'
import { FIconBook } from '@fighting-design/fighting-icon'
import { FSvgIcon } from '../index'

describe('SvgIcon', () => {
  test('class', () => {
    const wrapper = mount(FSvgIcon)
    expect(wrapper.classes()).toContain('f-svg-icon')
    expect(wrapper.attributes('role')).toContain('img')
    expect(wrapper.attributes('text-indent')).toContain('middle')
  })

  test('icon', () => {
    const wrapper = mount(FSvgIcon, {
      props: { icon: markRaw(FIconBook) }
    })
    expect(wrapper.findComponent(FIconBook).exists()).toBeTruthy()
  })

  test('default slot', () => {
    const wrapper = mount(FSvgIcon, {
      slots: { default: FIconBook }
    })
    expect(wrapper.findComponent(FIconBook).exists()).toBeTruthy()
  })

  test('color', () => {
    const wrapper = mount(FSvgIcon, {
      props: { color: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('--svg-icon-color: red')
  })
  test('size', () => {
    const wrapper = mount(FSvgIcon, {
      props: { size: '34px' }
    })
    expect(wrapper.attributes('style')).toContain('--svg-icon-size: 34px')
  })

  test('onClick', () => {
    const onClick = vi.fn()
    const wrapper = mount(FSvgIcon, {
      props: { onClick }
    })
    wrapper.trigger('click')
    expect(onClick).toHaveBeenCalled()
  })
})
