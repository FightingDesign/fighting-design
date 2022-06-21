import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FTimeLine2222 } from '@fighting-design/fighting-components'

describe('FTimeLine2222', () => {
  test('class', () => {
    const wrapper = mount(FTimeLine2222)
    expect(wrapper.classes()).toContain('f-time-line2222')
  })
})
