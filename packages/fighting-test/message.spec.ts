import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FMessage } from '@fighting-design/fighting-components'

describe('FMessage', () => {
  test('class', () => {
    const wrapper = mount(FMessage)
    expect(wrapper.classes()).toContain('f-message')
  })
})
