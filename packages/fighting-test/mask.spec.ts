import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FMask } from '@fighting-design/fighting-components'

describe('FMask', () => {
  test('class', () => {
    const wrapper = mount(FMask)
    expect(wrapper.classes()).toContain('f-mask')
  })
})
