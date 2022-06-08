import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FButton } from '@fighting-design/fighting-components'

describe('FButton', () => {
  test('blob', () => {
    const wrapper = mount(FButton, {
      props: { blob: true }
    })
    expect(wrapper.classes()).toContain('f-button-blob')
  })

  test('round', () => {
    const wrapper = mount(FButton, {
      props: { round: true }
    })
    expect(wrapper.classes()).toContain('f-button-round')
  })

  test('fontSize', () => {
    const wrapper = mount(FButton, {
      props: { fontSize: '20px' }
    })
    expect(wrapper.attributes('style')).toContain('20px')
  })

  test('fontColor', () => {
    const wrapper = mount(FButton, {
      props: { fontColor: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('red')
  })

  test('size', () => {
    const wrapper = mount(FButton, {
      props: { size: 'large' }
    })
    expect(wrapper.classes()).toContain('f-button-large')
  })

  test('block', () => {
    const wrapper = mount(FButton, {
      props: { block: true }
    })
    expect(wrapper.classes()).toContain('f-button-block')
  })

  test('loading', () => {
    const wrapper = mount(FButton, {
      props: { loading: true }
    })
    expect(wrapper.classes()).toContain('f-button-disabled')
  })

  test('disabled', () => {
    const wrapper = mount(FButton, {
      props: { disabled: true }
    })
    expect(wrapper.classes()).toContain('f-button-disabled')
  })

  test('leftIcon', () => {
    const wrapper = mount(FButton, {
      props: { leftIcon: 'f-icon-Customermanagement' }
    })
    expect(wrapper.find('i').classes()).toContain('f-icon-Customermanagement')
  })

  test('rightIcon', () => {
    const wrapper = mount(FButton, {
      props: { rightIcon: 'f-icon-Customermanagement' }
    })
    expect(wrapper.find('i').classes()).toContain('f-icon-Customermanagement')
  })

  test('type', () => {
    const wrapper = mount(FButton, {
      props: { type: 'primary' }
    })
    expect(wrapper.classes()).toContain('f-button-primary')
  })

  test('autofocus', () => {
    const wrapper = mount(FButton, {
      props: { autofocus: true }
    })
    expect(wrapper.attributes('autofocus')).toContain('true')
  })

  test('name', () => {
    const wrapper = mount(FButton, {
      props: { name: 'my-button' }
    })
    expect(wrapper.attributes('name')).toContain('my-button')
  })

  test('shadow', () => {
    const wrapper = mount(FButton, {
      props: { shadow: '7px 7px 15px #dcdcdc,-7px -7px 15px #e4e4e4' }
    })
    expect(wrapper.attributes('style')).toContain(
      '7px 7px 15px #dcdcdc,-7px -7px 15px #e4e4e4'
    )
  })

  test('text', () => {
    const wrapper = mount(FButton, {
      props: { text: true }
    })
    expect(wrapper.classes()).toContain('f-button-text')
  })

  test('simple', () => {
    const wrapper = mount(FButton, {
      props: { simple: true }
    })
    expect(wrapper.classes()).toContain('f-button-simple')
  })

  test('default slot', () => {
    const wrapper = mount(FButton, {
      slots: { default: '这是按钮' }
    })
    expect(wrapper.text()).toContain('这是按钮')
  })

  test('on click', async () => {
    const wrapper = mount(FButton, {
      slots: { default: '点击测试' }
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })

  test('disabled click', async () => {
    const wrapper = mount(FButton, {
      slots: { default: '点击测试' },
      props: { disabled: true }
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  test('loading click', async () => {
    const wrapper = mount(FButton, {
      slots: { default: '点击测试' },
      props: { loading: true }
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })
})
