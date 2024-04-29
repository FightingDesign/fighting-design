import { h, markRaw } from 'vue'
import { mount } from '@vue/test-utils'
import { vi, describe, expect, test } from 'vitest'
import { FIconCross, FIconInfo } from '@fighting-design/fighting-icon'
import FMessageVue from '../src/message.vue'
import { FIGHTING_TYPE } from '../../_tokens'
import type { MessagePlacement } from '../src/interface'
import type { MessageProps } from '../src/props'
import type { ComponentPublicInstance } from 'vue'

const AXIOM = 'The electric light dancing at your fingertips is my unchanging faith'

type MessageInstance = ComponentPublicInstance<MessageProps & {
  visible: boolean
}>

describe('FMessage', () => {
  test('basic render', async () => {
    const wrapper = mount(FMessageVue, {
      props: {
        message: AXIOM,
      }
    })
    expect(wrapper.find('.f-message').exists()).toBe(true)
    expect(wrapper.find('.f-message').attributes('style')).toContain('top: 20px')
    expect(wrapper.find('.f-message__text').text()).toBe(AXIOM)
  })

  test('should render when the `message` prop is VNode', () => {
    const wrapper = mount(FMessageVue, {
      props: {
        message: h('span', { class: 'mikoto-misaka' }, AXIOM)
      }
    })
    expect(wrapper.find('.mikoto-misaka').text()).toBe(AXIOM)
  })

  test('type', () => {
    FIGHTING_TYPE.forEach((type) => {
      const wrapper = mount(FMessageVue, {
        props: {
          type
        }
      })
      expect(wrapper.find(`.f-message__${type}`).exists()).toBe(true)
    })
  })

  test('round', () => {
    const wrapper = mount(FMessageVue, {
      props: {
        round: true
      }
    })
    expect(wrapper.find('.f-message__round').exists()).toBe(true)
  })

  test('icon', () => {
    const wrapper = mount(FMessageVue, {
      props: {
        icon: markRaw(FIconInfo)
      }
    })
    expect(wrapper.findComponent(FIconInfo).exists()).toBe(true)
  })

  test('color', () => {
    const wrapper = mount(FMessageVue, {
      props: {
        color: 'red'
      }
    })
    expect(wrapper.find('.f-message').attributes('style')).toContain('--message-color: red')
  })

  test('background', () => {
    const wrapper = mount(FMessageVue, {
      props: {
        background: 'red'
      }
    })
    expect(wrapper.find('.f-message').attributes('style')).toContain('--message-background: red')
  })

  test('offset', () => {
    const wrapper = mount(FMessageVue, {
      props: {
        offset: 40
      }
    })
    expect(wrapper.find('.f-message').attributes('style')).toContain('top: 40px')
  })

  test('zIndex', () => {
    const wrapper = mount(FMessageVue, {
      props: {
        zIndex: 100
      }
    })
    expect(wrapper.find('.f-message').attributes('style')).toContain('--message-z-index: 100')
  })

  test('placement', () => {
    const messagePlacement: MessagePlacement[] = ['top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right']
    messagePlacement.forEach((placement) => {
      const wrapper = mount(FMessageVue, {
        props: {
          placement
        }
      })
      expect(wrapper.find('.f-message').classes()).toContain(`f-message__${placement}`)
    })
  })

  describe('close action', () => {
    test('message should be closable when close button is clicked', async () => {
      const wrapper = mount(FMessageVue, {
        props: {
          close: true
        }
      })
      const closeBtn = wrapper.find('.f-message__close')
      expect(closeBtn.exists()).toBe(true)
      await closeBtn.trigger('click')
      expect(wrapper.find('.f-message').isVisible()).toBe(false)
    })

    test('closeBtn is a icon', () => {
      const wrapper = mount(FMessageVue, {
        props: {
          close: true,
          closeBtn: markRaw(FIconCross)
        }
      })
      expect(wrapper.findComponent(FIconCross).exists()).toBe(true)
    })

    test('closeBtn is a string type', () => {
      const wrapper = mount(FMessageVue, {
        props: {
          close: true,
          closeBtn: 'close'
        }
      })
      expect(wrapper.find('.f-message__close').text()).toBe('close')
    })

    test('onClose callback should be invoked when the close button is clicked', async () => {
      const onClose = vi.fn()
      const wrapper = mount(FMessageVue, {
        props: {
          close: true,
          onClose
        }
      })
      const closeBtn = wrapper.find('.f-message__close')
      await closeBtn.trigger('click')
      expect(onClose).toHaveBeenCalled()
    })

    test('message should be closable after duration', async () => {
      vi.useFakeTimers()
      const wrapper = mount(FMessageVue, {
        props: { duration: 1000 }
      })
      const vm = wrapper.vm as unknown as MessageInstance
      expect(vm.visible).toBe(true)
      vi.runAllTimers()
      expect(vm.visible).toBe(false)
      vi.useRealTimers()
    })

    test('message should not be closable when duration is set to 0', async () => {
      vi.useFakeTimers()
      const wrapper = mount(FMessageVue, {
        props: { duration: 0 }
      })
      const vm = wrapper.vm as unknown as MessageInstance
      expect(vm.visible).toBe(true)
      vi.runAllTimers()
      expect(vm.visible).toBe(true)
      vi.useRealTimers()
    })

    test('message should prevent closure when mouse is hovered over it', async () => {
      vi.useFakeTimers()
      const wrapper = mount(FMessageVue, {
        props: { duration: 1000 }
      })
      const vm = wrapper.vm as unknown as MessageInstance
      expect(vm.visible).toBe(true)
      await wrapper.find('.f-message').trigger('mouseenter')
      vi.runAllTimers()
      expect(vm.visible).toBe(true)
      await wrapper.find('.f-message').trigger('mouseleave')
      vi.runAllTimers()
      expect(vm.visible).toBe(false)
      vi.useRealTimers()
    })
  })
})
