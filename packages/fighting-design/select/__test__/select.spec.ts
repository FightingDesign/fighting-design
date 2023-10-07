import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FSelect } from '../index'

describe('Select', () => {
  test('class', () => {
    const wrapper = mount(FSelect)
    expect(wrapper.classes()).toContain('f-select')
  })

  test('width', () => {
    const wrapper = mount(FSelect, {
      props: { width: 20 }
    })
    expect(wrapper.attributes('style')).toContain('--select-width: 20px')
  })

  test('width', () => {
    const wrapper = mount(FSelect, {
      props: { width: '30px' }
    })
    expect(wrapper.attributes('style')).toContain('--select-width: 30px')
  })
})
