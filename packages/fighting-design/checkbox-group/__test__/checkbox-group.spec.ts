import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FCheckboxGroup } from '../index'

describe('FCheckboxGroup', () => {
  test('class', () => {
    const wrapper = mount(FCheckboxGroup)
    expect(wrapper.classes()).toContain('f-checkbox-group')
  })

  test('vertical', () => {
    const wrapper = mount(FCheckboxGroup, {
      props: {
        vertical: true
      }
    })
    expect(wrapper.get('.f-checkbox-group').classes()).toContain('f-checkbox-group__vertical')
  })

  test('border', () => {
    const wrapper = mount(FCheckboxGroup, {
      props: {
        border: true
      }
    })
    expect(wrapper.get('.f-checkbox-group').classes()).toContain('f-checkbox-group__border')
  })

  test('size', () => {
    const wrapper = mount(FCheckboxGroup, {
      props: {
        border: true,
        size: 'large'
      }
    })
    expect(wrapper.get('.f-checkbox-group').classes()).toContain('f-checkbox-group__large')
  })

  test('columnGap', () => {
    const wrapper = mount(FCheckboxGroup, {
      props: {
        columnGap: 50
      }
    })
    expect(wrapper.get('.f-checkbox-group').attributes().style).toContain('column-gap: 50px;')
  })

  test('rowGap', () => {
    const wrapper = mount(FCheckboxGroup, {
      props: {
        rowGap: 100
      }
    })
    expect(wrapper.get('.f-checkbox-group').attributes().style).toContain('row-gap: 100px;')
  })
})
