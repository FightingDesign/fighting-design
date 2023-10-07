import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FToolbarItem } from '../index'

describe('FToolbarItem', () => {
  test('class', () => {
    const wrapper = mount(FToolbarItem)
    expect(wrapper.classes()).toContain('f-toolbar-item')
  })

  test('color', () => {
    const wrapper = mount(FToolbarItem, {
      props: { color: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('red')
  })

  test('color', () => {
    const wrapper = mount(FToolbarItem, {
      props: { index: 2 }
    })
    expect(wrapper.attributes('data-index')).toContain(2)
  })
})
