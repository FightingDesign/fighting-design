import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FMenuItemGroup } from '../index'

describe('MenuItemGroup', () => {
  test('class', () => {
    const wrapper = mount(FMenuItemGroup)
    expect(wrapper.classes()).toContain('f-menu-item-group')
  })

  test('title', () => {
    const wrapper = mount(FMenuItemGroup, {
      props: { title: '标题' }
    })
    expect(wrapper.find('.f-menu-item-group__title').text()).toContain('标题')
  })

  test('slots', () => {
    const wrapper = mount(FMenuItemGroup, {
      slots: { default: '内容' }
    })
    expect(wrapper.find('.f-menu-item-group__list').text()).toContain('内容')
  })
})
