import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FDrawer } from '../index'

describe('FDrawer', () => {
  test('class', () => {
    const wrapper = mount(FDrawer)
    expect(wrapper.find('div').classes()).toContain('f-drawer')
  })

  test('title', () => {
    const wrapper = mount(FDrawer, {
      props: { title: '标题' }
    })
    expect(wrapper.find('.f-drawer__header-title').text()).toContain('标题')
  })
})
