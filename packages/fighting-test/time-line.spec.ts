import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FTimeLine } from '@fighting-design/fighting-components'

describe('FTimeLine', () => {
  test('class', () => {
    const wrapper = mount(FTimeLine)
    expect(wrapper.classes()).toContain('f-time-line')
  })
})
