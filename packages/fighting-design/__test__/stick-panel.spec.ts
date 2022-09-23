import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FStickPanel } from '../index'

describe('StickPanel', () => {
  test('class', () => {
    const wrapper = mount(FStickPanel)
    expect(wrapper.classes()).toContain('f-stick-panel')
  })
})
