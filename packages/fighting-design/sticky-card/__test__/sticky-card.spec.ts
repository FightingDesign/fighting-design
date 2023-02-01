import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FStickyCard } from '../index'

describe('StickPanel', () => {
  test('class', () => {
    const wrapper = mount(FStickyCard)
    expect(wrapper.classes()).toContain('f-sticky-card')
  })

  test('borderColor', () => {
    const wrapper = mount(FStickyCard, {
      props: { borderColor: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('--sticky-card-border-color: red')
  })
})
