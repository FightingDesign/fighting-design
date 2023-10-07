import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FEmpty } from '../index'

describe('FEmpty', () => {
  test('class', () => {
    const wrapper = mount(FEmpty)
    expect(wrapper.classes()).toContain('f-empty')
  })

  test('content', () => {
    const wrapper = mount(FEmpty, {
      props: { content: '内容啊' }
    })
    expect(wrapper.find('.f-empty__content').text()).toContain('内容啊')
  })

  test('contentSize', () => {
    const wrapper = mount(FEmpty, {
      props: {
        contentSize: '20px'
      }
    })
    expect(wrapper.find('.f-empty').attributes('style')).toContain(
      '--empty-content-size: 20px'
    )
  })

  test('contentSize', () => {
    const wrapper = mount(FEmpty, {
      props: {
        contentSize: 40
      }
    })
    expect(wrapper.find('.f-empty').attributes('style')).toContain(
      '--empty-content-size: 40px'
    )
  })

  test('contentColor', () => {
    const wrapper = mount(FEmpty, {
      props: {
        contentColor: 'red'
      }
    })
    expect(wrapper.find('.f-empty').attributes('style')).toContain(
      '--empty-content-color: red'
    )
  })

  test('background', () => {
    const wrapper = mount(FEmpty, {
      props: {
        background: 'red'
      }
    })
    expect(wrapper.find('.f-empty').attributes('style')).toContain(
      '--empty-background: red'
    )
  })
})
