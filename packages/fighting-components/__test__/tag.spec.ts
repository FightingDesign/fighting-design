import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FTag } from '@fighting-design/fighting-components'

describe('FTag', () => {
  test('class', () => {
    const wrapper = mount(FTag)
    expect(wrapper.classes()).toContain('f-tag')
  })
})
