import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FWatermark } from '@fighting-design/fighting-components'

describe('FWatermark', () => {
  test('class', () => {
    const wrapper = mount(FWatermark)
    expect(wrapper.classes()).toContain('f-watermark')
  })
})
