import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FTextarea } from '../index'

describe('Textarea', () => {
  test('class', () => {
    const wrapper = mount(FTextarea)
    expect(wrapper.classes()).toContain('f-textarea')
  })
})
