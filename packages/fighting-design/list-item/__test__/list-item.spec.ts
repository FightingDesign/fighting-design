import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FListItem } from '../index'

describe('FListItem', () => {
  test('class', () => {
    const wrapper = mount(FListItem)
    expect(wrapper.classes()).toContain('f-list-item')
  })
})
