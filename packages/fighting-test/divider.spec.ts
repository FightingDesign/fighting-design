import { FDivider } from '@fighting-design/fighting-components'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

describe('FDivider', () => {
  test('position', () => {
    const position = ['left', 'center', 'right'] as const
    position.map((item) => {
      const wrapper = mount(FDivider, {
        props: { position: item }
      })
      expect(wrapper.find('.f-divider-text').classes()).toContain(
        `f-divider-text-${item}`
      )
    })
  })
})
