import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FEllipsis } from '../index'

describe('Ellipsis', () => {
  test('class', () => {
    const wrapper = mount(FEllipsis)
    expect(wrapper.classes()).toContain('f-ellipsis')
  })
})
