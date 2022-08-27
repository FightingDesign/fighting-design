import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FNotification } from './index'

describe('FNotification', () => {
  test('class', () => {
    const wrapper = mount(FNotification)
    expect(wrapper.classes()).toContain('f-notification')
  })
})
