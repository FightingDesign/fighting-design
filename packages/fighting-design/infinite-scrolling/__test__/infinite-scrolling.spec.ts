import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FInfiniteScrolling } from '../index'

describe('FInfiniteScrolling', () => {
  test('class', () => {
    const wrapper = mount(FInfiniteScrolling)
    expect(wrapper.classes()).toContain('f-infinite-scrolling')
  })
})
