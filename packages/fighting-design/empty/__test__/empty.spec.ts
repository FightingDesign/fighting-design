import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FEmpty } from '../index'

describe('FEmpty', () => {
  test('class', () => {
    const wrapper = mount(FEmpty)
    expect(wrapper.classes()).toContain('f-empty')
  })
})
