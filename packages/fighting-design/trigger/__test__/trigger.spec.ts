import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FTrigger } from '../index'

describe('Trigger', () => {
  test('class', () => {
    const wrapper = mount(FTrigger)
    expect(wrapper.classes()).toContain('f-trigger')
  })
})
