import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FTimeLine33342 } from '@fighting-design/fighting-components'

describe('FTimeLine33342', () => {
  test('class', () => {
    const wrapper = mount(FTimeLine33342)
    expect(wrapper.classes()).toContain('f-time-line33342')
  })
})
