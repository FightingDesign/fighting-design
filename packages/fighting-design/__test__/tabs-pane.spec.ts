import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FTabsPane } from '../index'

describe('TabsPane', () => {
  test('class', () => {
    const wrapper = mount(FTabsPane)
    expect(wrapper.classes()).toContain('f-tabs-pane')
  })
})
