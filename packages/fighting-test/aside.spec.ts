import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FAside } from '@fighting-design/fighting-components'

describe('FAside', () => {
  test('f-aside', () => {
    const wrapper = mount(FAside)
    expect(wrapper.classes()).toContain('f-aside')
  })

  test('f-aside', () => {
    const wrapper = mount(FAside, {
      props: { width: '200px' }
    })
    expect(wrapper.attributes('style')).toContain('200px')
  })
})
