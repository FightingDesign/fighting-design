import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FCheckboxGroup } from '../index'
import { FIGHTING_SIZE } from '../../_tokens'
import type { FightingSize } from '../../_interface'

describe('FCheckboxGroup', () => {
  test('class', () => {
    const wrapper = mount(FCheckboxGroup)
    expect(wrapper.classes()).toContain('f-checkbox-group')
  })

  test('vertical', () => {
    const wrapper = mount(FCheckboxGroup, {
      props: { vertical: true }
    })
    expect(wrapper.get('.f-checkbox-group').classes()).toContain(
      'f-checkbox-group__vertical'
    )
  })

  test('background', () => {
    const wrapper = mount(FCheckboxGroup, {
      props: { background: true }
    })
    expect(wrapper.get('.f-checkbox-group').classes()).toContain(
      'f-checkbox-group__background'
    )
  })

  test('size', () => {
    FIGHTING_SIZE.forEach((size: FightingSize): void => {
      const wrapper = mount(FCheckboxGroup, {
        props: { background: true, size }
      })
      expect(wrapper.get('.f-checkbox-group').classes()).toContain(
        `f-checkbox-group__${size}`
      )
    })
  })

  test('columnGap', () => {
    const wrapper = mount(FCheckboxGroup, {
      props: { columnGap: 50 }
    })
    expect(wrapper.get('.f-checkbox-group').attributes().style).toContain(
      'column-gap: 50px;'
    )
  })

  test('rowGap', () => {
    const wrapper = mount(FCheckboxGroup, {
      props: {
        rowGap: 100
      }
    })
    expect(wrapper.get('.f-checkbox-group').attributes().style).toContain(
      'row-gap: 100px;'
    )
  })
})
