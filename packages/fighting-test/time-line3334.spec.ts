import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FTimeLine3334 } from '@fighting-design/fighting-components'

describe('FTimeLine3334', () => {
  test('class', () => {
    const wrapper = mount(FTimeLine3334)
    expect(wrapper.classes()).toContain('f-time-line3334')
  })
})
