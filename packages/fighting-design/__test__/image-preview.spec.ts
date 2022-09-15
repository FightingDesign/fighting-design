import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FImagePreview } from '../index'

describe('ImagePreview', () => {
  test('class', () => {
    const wrapper = mount(FImagePreview, {
      props: { visible: true }
    })
    console.log(wrapper.classes())
    expect(wrapper.find('div').classes()).toContain('f-image-preview')
  })
})
