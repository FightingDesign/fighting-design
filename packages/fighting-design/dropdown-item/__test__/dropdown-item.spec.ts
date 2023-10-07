import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { FDropdownItem } from '../index'
import { TRIGGER_CLOSE_KEY } from '../../trigger/src/props'

describe('DropdownItem', () => {
  test('class', () => {
    const wrapper = mount(FDropdownItem)
    expect(wrapper.classes()).toContain('f-dropdown-item')
  })

  test('disabled', () => {
    const wrapper = mount(FDropdownItem, {
      props: { disabled: true }
    })
    expect(wrapper.classes()).toContain('f-dropdown-item__disabled')
  })

  test('onClick', async () => {
    const fn = vi.fn()
    const wrapper = mount(FDropdownItem, {
      props: {
        onClick: () => {
          fn('onClick')
        }
      },
      global: {
        provide: {
          [TRIGGER_CLOSE_KEY as symbol]: {
            close: () => {
              fn('close')
            }
          }
        }
      }
    })
    wrapper.trigger('click')
    expect(fn.mock.calls[0][0]).toBe('close')
    expect(fn.mock.calls[1][0]).toBe('onClick')
  })
})
