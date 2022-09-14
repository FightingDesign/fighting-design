import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FImagePreview } from '../index'

describe('ImagePreview', () => {
  test('class', () => {
    const wrapper = mount(FImagePreview)
    expect(wrapper.classes()).toContain('f-image-preview')
  })
})
