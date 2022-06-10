import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FAvatar } from '@fighting-design/fighting-components'

describe('FAvatar', () => {
  test('class', () => {
    const wrapper = mount(FAvatar)
    expect(wrapper.classes()).toContain('f-avatar')
  })
})
