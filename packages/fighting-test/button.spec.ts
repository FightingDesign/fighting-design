import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { FButton } from '@fighting-design/fighting-components'
import { FButtonGroup } from '@fighting-design/fighting-components'

describe('FButton', () => {
  it('type', () => {
    const wrapper = mount(FButton, {
      props: { type: 'primary' }
    })
    expect(wrapper.classes()).toContain('f-button-primary')
  })

  it('round', () => {
    const wrapper = mount(FButton, {
      props: { round: true }
    })
    expect(wrapper.classes()).toContain('f-button-round')
  })

  it('size', () => {
    const wrapper = mount(FButton, {
      props: { size: 'large' }
    })
    expect(wrapper.classes()).toContain('f-button-large')
  })
})

describe('FButtonGroup', () => {
  it('size', () => {
    const wrapper = mount(FButtonGroup, {
      props: { size: 'large', vertical: false }
    })
    expect(wrapper.classes()).toContain('f-button-group-large')
  })
})
