import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FPageHeader } from '../index'

describe('FPageHeader', () => {
  test('class', () => {
    const wrapper = mount(FPageHeader)
    expect(wrapper.classes()).toContain('f-page-header')
  })
})
