import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FButtonGroup } from '@fighting-design/fighting-components'

describe('FButtonGroup', () => {
  test('class', () => {
    const wrapper = mount(FButtonGroup)
    expect(wrapper.classes()).toContain('f-button-group')
  })

  test('size', () => {
    const wrapper = mount(FButtonGroup, {
      props: { size: 'large', vertical: false }
    })
    expect(wrapper.classes()).toContain('f-button-group-large')
  })

  test('vertical', () => {
    const wrapper = mount(FButtonGroup, {
      props: { vertical: true }
    })
    expect(wrapper.classes()).toContain('f-button-group-vertical')
  })

  test('vertical', () => {
    const wrapper = mount(FButtonGroup, {
      props: { vertical: false }
    })
    expect(wrapper.classes()).toContain('f-button-group-horizontal')
  })
})
