import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FCard } from '@fighting-design/fighting-components'

describe('FCard', () => {
  test('class', () => {
    const wrapper = mount(FCard)
    expect(wrapper.classes()).toContain('f-card')
  })
})
