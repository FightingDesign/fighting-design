import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FAffix } from '@fighting-design/fighting-components'

describe('FAffix', () => {
  test('class', () => {
    const wrapper = mount(FAffix)
    expect(wrapper.classes()).toContain('f-affix')
  })
  test('offset', () => {
    const wrapper = mount(FAffix, {
      props: {
        offset: 120
      }
    })
    expect(wrapper.vm.offset).toBe(120)
  })
})
