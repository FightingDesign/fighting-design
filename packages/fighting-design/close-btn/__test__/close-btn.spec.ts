import { h, markRaw } from 'vue'
import { mount } from '@vue/test-utils'
import { vi, describe, expect, test } from 'vitest'
import { FIconCross } from '@fighting-design/fighting-icon'
import { FCloseBtn } from '../index'

describe('CloseBtn', () => { 
  test('create', () => {
    const wrapper = mount(FCloseBtn)
    expect(wrapper.classes()).toContain('f-close-btn')
  })

  test('size prop supports both number and string types', () => {
    const size = 100
    const sizeList = [size, `${size}px`]
    sizeList.forEach((item) => {
      const wrapper = mount(FCloseBtn, {
        props: { size: item }
      })
      expect(wrapper.find('.f-svg-icon').attributes('style')).toContain(`--svg-icon-size: ${size}px`)
    })
  })

  test('round', () => {
    const wrapper = mount(FCloseBtn, {
      props: { round: true }
    })
    expect(wrapper.classes()).toContain('f-close-btn__round')
  })

  test('color', () => {
    const wrapper = mount(FCloseBtn, {
      props: { color: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('--close-btn-color: red')
  })

  test('hoverColor', () => {
    const wrapper = mount(FCloseBtn, {
      props: { hoverColor: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('--close-btn-hover-color: red')
  })

  test('icon', () => {
    const wrapper = mount(FCloseBtn, {
      props: { icon: markRaw(FIconCross) }
    })
    expect(wrapper.findComponent(FIconCross).exists()).toBeTruthy()
  })

  test('should render slot', () => {
    const wrapper = mount(FCloseBtn, {
      slots: { default: h(FIconCross) }
    })
    expect(wrapper.findComponent(FIconCross).exists()).toBeTruthy()
  })

  test('should not trigger `onClick` callback when the `disabled` prop is set to true', () => {
    const onClick = vi.fn()
    const wrapper = mount(FCloseBtn, {
      props: {
        onClick,
        disabled: true
      }
    })
    expect(wrapper.classes()).toContain('f-close-btn__disabled')
    wrapper.trigger('click')
    expect(onClick).not.toHaveBeenCalled()
  })

  test('onClick', async () => {
    const onClick = vi.fn()
    const wrapper = mount(FCloseBtn, {
      props: { onClick }
    })
    wrapper.trigger('click')
    expect(onClick).toHaveBeenCalled()
  })
})
