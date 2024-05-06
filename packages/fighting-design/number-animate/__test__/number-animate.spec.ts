import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FNumberAnimate } from '../index'

describe('FNumberAnimate', () => {
  test('class', () => {
    const wrapper = mount(FNumberAnimate, { props: { form: 0, to: 20 } })
    expect(wrapper.classes()).toContain('f-number-animate')
  })
})
