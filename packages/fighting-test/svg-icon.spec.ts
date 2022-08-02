import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FSvgIcon } from '@fighting-design/fighting-components'

describe('FSvgIcon', () => {
  test('class', () => {
    const wrapper = mount(FSvgIcon)
    expect(wrapper.classes()).toContain('f-svg-icon')
  })
})
