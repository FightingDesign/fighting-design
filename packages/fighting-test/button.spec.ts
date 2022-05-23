import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { FButton } from '@fighting-design/fighting-components'
import { FButtonGroup } from '@fighting-design/fighting-components'

// https://test-utils.vuejs.org

describe('FButton', () => {
  it('blob', () => {
    const wrapper = mount(FButton, {
      props: { blob: true }
    })
    expect(wrapper.find('span').classes()).toContain('f-text-blob')
  })

  it('round', () => {
    const wrapper = mount(FButton, {
      props: { round: true }
    })
    expect(wrapper.classes()).toContain('f-button-round')
  })

  it('fontSize', () => {
    const wrapper = mount(FButton, {
      props: { fontSize: '20px' }
    })
    expect(wrapper.find('span').attributes('style')).toContain('20px')
  })

  it('fontColor', () => {
    const wrapper = mount(FButton, {
      props: { fontColor: 'red' }
    })
    expect(wrapper.find('span').attributes('style')).toContain('red')
  })

  it('size', () => {
    const wrapper = mount(FButton, {
      props: { size: 'large' }
    })
    expect(wrapper.classes()).toContain('f-button-large')
  })

  it('block', () => {
    const wrapper = mount(FButton, {
      props: { block: true }
    })
    expect(wrapper.classes()).toContain('f-button-block')
  })

  it('loading', () => {
    const wrapper = mount(FButton, {
      props: { loading: true }
    })
    expect(wrapper.classes()).toContain('f-button-disabled')
  })

  it('disabled', () => {
    const wrapper = mount(FButton, {
      props: { disabled: true }
    })
    expect(wrapper.classes()).toContain('f-button-disabled')
  })

  it('icon', () => {
    const wrapper = mount(FButton, {
      props: { icon: 'f-icon-Customermanagement' }
    })
    expect(wrapper.find('i').classes()).toContain('f-icon-Customermanagement')
  })

  it('type', () => {
    const wrapper = mount(FButton, {
      props: { type: 'primary' }
    })
    expect(wrapper.classes()).toContain('f-button-primary')
  })

  it('autofocus', () => {
    const wrapper = mount(FButton, {
      props: { autofocus: true }
    })
    expect(wrapper.attributes('autofocus')).toContain('true')
  })

  it('name', () => {
    const wrapper = mount(FButton, {
      props: { name: 'my-button' }
    })
    expect(wrapper.attributes('name')).toContain('my-button')
  })

  it('shadow', () => {
    const wrapper = mount(FButton, {
      props: { shadow: '7px 7px 15px #dcdcdc,-7px -7px 15px #e4e4e4' }
    })
    expect(wrapper.attributes('style')).toContain('7px 7px 15px #dcdcdc,-7px -7px 15px #e4e4e4')
  })

  it('text', () => {
    const wrapper = mount(FButton, {
      props: { text: true }
    })
    expect(wrapper.classes()).toContain('f-button-text')
  })

  it('simple', () => {
    const wrapper = mount(FButton, {
      props: { simple: true }
    })
    expect(wrapper.classes()).toContain('f-button-simple')
  })

  it('border', () => {
    const wrapper = mount(FButton, {
      props: { border: true, text: true }
    })
    expect(wrapper.classes()).toContain('f-button-border')
  })
})

describe('FButtonGroup', () => {
  it('size', () => {
    const wrapper = mount(FButtonGroup, {
      props: { size: 'large', vertical: false }
    })
    expect(wrapper.classes()).toContain('f-button-group-large')
  })

  it('vertical', () => {
    const wrapper = mount(FButtonGroup, {
      props: { vertical: true }
    })
    expect(wrapper.classes()).toContain('f-button-group-vertical')
  })

  it('vertical', () => {
    const wrapper = mount(FButtonGroup, {
      props: { vertical: false }
    })
    expect(wrapper.classes()).toContain('f-button-group-horizontal')
  })
})
