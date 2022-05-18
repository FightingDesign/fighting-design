import { FIcon } from '@fighting-design/fighting-components'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('FIcon', () => {
  it('icon', () => {
    const wrapper = mount(FIcon, {
      props: { icon: 'f-icon-credit-level-fill', fontClass: '', color: '', size: '', opacity: '' }
    })
    expect(wrapper.classes()).toContain('f-icon-credit-level-fill')
  })
})
