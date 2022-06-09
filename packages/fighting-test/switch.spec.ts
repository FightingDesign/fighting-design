import { FSwitch } from '@fighting-design/fighting-components'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

describe('FSwitch', () => {
  test('class', () => {
    const wrapper = mount(FSwitch)
    expect(wrapper.classes()).toContain('f-switch')
  })
})
