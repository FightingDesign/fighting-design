import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FDialog } from '../index'

describe('FDialog', () => {
  test('class', () => {
    const wrapper = mount(FDialog)
    expect(wrapper.find('div').classes()).toContain('f-popup')
  })

  test('title', () => {
    const wrapper = mount(FDialog, {
      props: {
        title: '标题'
      }
    })
    expect(wrapper.find('.f-dialog__header-title').text()).toContain('标题')
  })

  test('width', () => {
    const wrapper = mount(FDialog, {
      props: {
        width: '200px'
      }
    })
    expect(wrapper.find('.f-dialog').attributes('style')).toContain('width: 200px')
  })

  test('width', () => {
    const wrapper = mount(FDialog, {
      props: {
        width: 400
      }
    })
    expect(wrapper.find('.f-dialog').attributes('style')).toContain('width: 400px')
  })

  test('fullscreen', () => {
    const wrapper = mount(FDialog, {
      props: {
        fullscreen: true
      }
    })
    expect(wrapper.find('.f-dialog').classes()).toContain('f-dialog__fullscreen')
  })
})
