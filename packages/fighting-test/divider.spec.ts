import { FDivider } from '@fighting-design/fighting-components'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

describe('FDivider', () => {
  test('class', () => {
    const wrapper = mount(FDivider)
    expect(wrapper.classes()).toContain('f-divider')
  })
})
