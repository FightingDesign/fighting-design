import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FCheckTag } from '../index'
import { FIGHTING_SIZE, FIGHTING_TYPE } from '../../_tokens'
import type { FightingType } from '../../_interface'

describe('CheckTag', () => {
  test('class', () => {
    const wrapper = mount(FCheckTag)
    expect(wrapper.find('.f-check-tag').classes()).toContain('f-check-tag')
  })

  test('type', () => {
    FIGHTING_TYPE.forEach((item: FightingType): void => {
      const wrapper = mount(FCheckTag, {
        props: { type: item }
      })
      expect(wrapper.find('.f-check-tag').classes()).toContain(`f-check-tag__${item}`)
    })
  })

  test('size', () => {
    FIGHTING_SIZE.forEach(item => {
      const wrapper = mount(FCheckTag, {
        props: { size: item }
      })
      expect(wrapper.find('.f-check-tag').classes()).toContain(`f-check-tag__${item}`)
    })
  })
})
