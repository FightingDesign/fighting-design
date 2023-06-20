import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FDialog } from '../index'

describe('FDialog', () => {
  test('class', () => {
    const wrapper = mount(FDialog, {
      props: { visible: true }
    })
    expect(wrapper.find('div').classes()).toContain('f-dialog')
  })

  test('title', () => {
    const wrapper = mount(FDialog, {
      props: { visible: true, title: '标题' }
    })
    expect(wrapper.find('.f-dialog__header-center').text()).toContain('标题')
  })

  test('appendToBody', () => {
    const wrapper = mount(FDialog, {
      props: {
        visible: true,
        title: '标题',
        appendToBody: true
      }
    })
    expect(wrapper.find('.f-dialog .f-dialog').exists()).toBe(false)
    expect(document.body.innerHTML).toContain('f-dialog')
  })

  test('width', () => {
    const wrapper = mount(FDialog, {
      props: { visible: true, width: '200px' }
    })
    expect(wrapper.find('.f-dialog').attributes('style')).toContain('width: 200px')
  })

  test('width', () => {
    const wrapper = mount(FDialog, {
      props: {
        visible: true,
        width: 400
      }
    })
    expect(wrapper.find('.f-dialog').attributes('style')).toContain('width: 400px')
  })

  test('fullscreen', () => {
    const wrapper = mount(FDialog, {
      props: {
        visible: true,
        fullscreen: true
      }
    })
    expect(wrapper.find('.f-dialog').classes()).toContain('f-dialog__fullscreen')
  })

  test('showMask', () => {
    const wrapper = mount(FDialog, {
      props: {
        visible: true,
        showMask: true
      }
    })
    expect(wrapper.find('.f-dialog__mask').exists()).toBeTruthy()
  })

  test('maskClose', async () => {
    const wrapper = mount(FDialog, {
      props: {
        visible: true,
        showMask: true
      }
    })
    await wrapper.get('.f-dialog__wrapper').trigger('click.self')
    expect((wrapper.emitted('update:visible')?.[0] as boolean[])[0]).toBe(false)
    await wrapper.setProps({ visible: false })
    expect(wrapper.find('.f-dialog').isVisible()).toBe(false)
  })

  test('maskBlur', () => {
    const wrapper = mount(FDialog, {
      props: {
        visible: true,
        showMask: true,
        maskBlur: true
      }
    })
    expect(wrapper.find('.f-dialog').classes()).toContain('f-dialog__mask-blur')
  })

  test('showCloseIcon', () => {
    const wrapper = mount(FDialog, {
      props: {
        visible: true,
        showMask: true
      }
    })
    expect(wrapper.find('.f-close-btn').exists()).toBeTruthy()
  })

  test('zIndex', () => {
    const wrapper = mount(FDialog, {
      props: {
        visible: true,
        zIndex: 999
      }
    })
    expect(wrapper.find('.f-dialog').attributes().style).toContain('z-index: 999;')
  })
})
