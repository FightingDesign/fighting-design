import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FTabs, FTabsPane } from '../index'

describe('Tabs', () => {
  test('class', () => {
    const pane1 = mount(FTabsPane, {props: {name: 'home', label: 'home'}, slots: {default: 'this is home'}})
    const pane2 = mount(FTabsPane, {props: {name: 'about', label: 'about'}, slots: {default: 'this is about'}})
    const wrapper = mount(FTabs, {
      slots: {
        default: [
          pane1,
          pane2
        ]
      }
    })

    expect(wrapper.classes()).toContain('f-tabs')
  })
})
