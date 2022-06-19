import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { <%= displayName %> } from '@fighting-design/fighting-components'

describe('<%= displayName %>', () => {
  test('class', () => {
    const wrapper = mount(<%= displayName %>)
    expect(wrapper.classes()).toContain('f-<%= name %>')
  })
})
