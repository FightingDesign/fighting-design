import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FConfirmBox } from '../index'

describe('ConfirmBox', () => {
  test('class', () => {
    const wrapper = mount(FConfirmBox)
    expect(wrapper.classes()).toContain('f-confirm-box')
  })
})
