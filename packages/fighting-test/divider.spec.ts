import { FDivider } from '@fighting-design/fighting-components'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

const text = "I'm a divider"

describe('FDivider', () => {
  test('render with text', () => {
    const wrapper = mount(FDivider, {
      slots: {
        default: text
      }
    })
    expect(wrapper.find('span').text()).toBe(text)
  })

  test('vertical', () => {
    const wrapper = mount(FDivider, {
      props: {
        vertical: true
      }
    })
    expect(wrapper.classes()).toContain('f-divider-vertical')
    expect(wrapper.find('span').exists()).toBe(false)
  })

  test('position', () => {
    const wrapper = mount(FDivider, {
      slots: {
        default: text
      },
      props: {
        position: 'left'
      }
    })
    expect(wrapper.find('span').classes()).toContain('f-divider-text-left')
  })

  test('fontColor', () => {
    const wrapper = mount(FDivider, {
      slots: {
        default: text
      },
      props: {
        fontColor: 'green'
      }
    })
    expect(wrapper.find('span').attributes('style')).toBe('color: green;')
  })

  test('background', () => {
    const wrapper = mount(FDivider, {
      slots: {
        default: text
      },
      props: {
        background: 'green'
      }
    })
    expect(wrapper.find('span').attributes('style')).toBe('background: green;')
  })

  test('margin', () => {
    const wrapper = mount(FDivider, {
      props: {
        margin: '50px'
      }
    })
    expect(wrapper.attributes('style')).toBe('margin: 50px 0;')
  })

  test('color', () => {
    const wrapper = mount(FDivider, {
      props: {
        color: 'red'
      }
    })
    expect(wrapper.attributes('style')).toBe('border-color: red;')
  })

  test('type', () => {
    const wrapper = mount(FDivider, {
      props: {
        type: 'dashed'
      }
    })
    expect(wrapper.attributes('style')).toBe('border-style: dashed;')
  })

  test('color and type', () => {
    const wrapper = mount(FDivider, {
      props: {
        color: 'red',
        type: 'dashed'
      }
    })
    expect(wrapper.attributes('style')).toBe(
      'border-color: red; border-style: dashed;'
    )
  })
})
