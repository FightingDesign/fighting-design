import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FListItem } from '../index'

describe('FListItem', () => {
  test('class', () => {
    const wrapper = mount(FListItem)
    expect(wrapper.classes()).toContain('f-list-item')
    expect(wrapper.attributes('role')).toContain('listitem')
  })

  test('background', () => {
    const wrapper = mount(FListItem, {
      props: { background: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('--list-item-background: red')
  })
})
