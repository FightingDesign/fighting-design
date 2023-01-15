import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FCollapseAnimation } from '../index'

describe('CollapseAnimation', () => {
  test('class', () => {
    const wrapper = mount(FCollapseAnimation)
    expect(wrapper.classes()).toContain('f-collapse-animation')
  })

  test('opened', () => {
    const wrapper = mount(FCollapseAnimation, {
      props: {
        opened: false
      },
      slots: {
        default: 'collapse-animation'
      }
    })
    wrapper.get('.f-collapse-animation')
    expect(wrapper.attributes().style).toContain('height: 0;')
  })

  test('disabled', async () => {
    const wrapper = mount(FCollapseAnimation, {
      props: {
        opened: false,
        disabled: true
      },
      slots: {
        default: 'collapse-animation'
      }
    })
    await wrapper.setProps({ opened: true })
    expect(wrapper.attributes().style).toContain('height: 0;')
  })
})
