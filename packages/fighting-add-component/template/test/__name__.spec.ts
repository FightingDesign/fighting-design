import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { F<%= displayName %> } from '../index'

describe('<%= displayName %>', () => {
  test('class', () => {
    const wrapper = mount(F<%= displayName %>)
    expect(wrapper.classes()).toContain('f-<%= name %>')
  })
})
