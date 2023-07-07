import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FAvatarGroup } from '../index'

describe('AvatarGroup', () => {
  test('class', () => {
    const wrapper = mount(FAvatarGroup)
    expect(wrapper.classes()).toContain('f-avatar-group')
  })
})
