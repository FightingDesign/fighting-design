import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FTree } from '../index'

describe('Tree', () => {
  test('class', () => {
    const wrapper = mount(FTree)
    expect(wrapper.classes()).toContain('f-tree')
  })
})
