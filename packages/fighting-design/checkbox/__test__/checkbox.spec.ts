import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FCheckbox } from '../index'
import { EMIT_UPDATE } from '../../_tokens'

describe('FCheckbox', () => {
  test('class', () => {
    const wrapper = mount(FCheckbox)
    expect(wrapper.classes()).toContain('f-checkbox')
  })

  test('select', async () => {
    const wrapper = mount(FCheckbox)
    await wrapper.get('input[type=checkbox]').setValue(true)
    await wrapper.get('input[type=checkbox]').setValue(false)
    expect(wrapper.emitted()).toHaveProperty(EMIT_UPDATE)
    expect(wrapper.emitted(EMIT_UPDATE)?.[0][0]).toBe(true)
    expect(wrapper.emitted(EMIT_UPDATE)?.[1][0]).toBe(false)
  })
})
