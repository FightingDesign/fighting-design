import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FTable } from '../index'

describe('Table', () => {
  test('class', () => {
    const wrapper = mount(FTable)
    expect(wrapper.classes()).toContain('f-table')
    expect(wrapper.attributes('role')).toContain('table')
  })
})
