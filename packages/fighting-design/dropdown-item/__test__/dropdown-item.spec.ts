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
    const fn = vi.fn()
    const wrapper = mount(FDropdownItem, {
      props: {
        disabled: true,
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
    expect(wrapper.classes()).toContain('f-dropdown-item__disabled')

    wrapper.trigger('click')
    expect(fn.mock.calls[0]).not.toEqual(['close'])
    expect(fn.mock.calls[1]).not.toEqual(['onClick'])
  })

  test('onClick', async () => {
    const fn = vi.fn()
    const wrapper = mount(FDropdownItem, {
      props: {
        onClick () {
          fn('onClick')
        }
      }
    })
    wrapper.trigger('click')
    expect(fn.mock.calls[0]).toEqual(['onClick'])
  })

  test('close callback should be triggered', async () => {
    const fn = vi.fn()
    const wrapper = mount(FDropdownItem, {
      global: {
        provide: {
          [TRIGGER_CLOSE_KEY as symbol]: {
            close () {
              fn('close')
            }
          }
        }
      }
    })
    wrapper.trigger('click')
    expect(fn.mock.calls[0]).toEqual(['close'])
  })

  test('should render slot', () => {
    const watermelon = '🍉🍉🍉'
    const wrapper = mount(FDropdownItem, {
      slots: {
        default: watermelon
      }
    })
    expect(wrapper.text()).toContain(watermelon)
  })
})
