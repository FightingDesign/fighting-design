import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FPagination } from '../index'

describe('Pagination', () => {
  test('class', () => {
    const wrapper = mount(FPagination)
    expect(wrapper.classes()).toContain('f-pagination')
  })
})
