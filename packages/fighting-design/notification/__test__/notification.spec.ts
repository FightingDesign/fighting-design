import { h, markRaw } from 'vue'
import { mount } from '@vue/test-utils'
import { vi, describe, expect, test } from 'vitest'
import FNotificationVue from '../src/notification.vue'
import { FIconCross, FIconInfo } from '@fighting-design/fighting-icon'
import { FIGHTING_TYPE } from '../../_tokens'
import type { NotificationPlacement } from '../src/interface'
import type { NotificationProps } from '../src/props'
import type { ComponentPublicInstance } from 'vue'

const NAME = 'Mikoto Misaka'
const AXIOM = 'The electric light dancing at your fingertips is my unchanging faith'

type NotificationInstance = ComponentPublicInstance<NotificationProps & {
  visible: boolean
}>

describe('FNotification', () => { 
  test('basic render', async () => {
    const wrapper = mount(FNotificationVue, {
      props: {
        title: NAME,
        message: AXIOM,
      }
    })
    expect(wrapper.find('.f-notification').exists()).toBe(true)
    expect(wrapper.find('.f-notification').attributes('style')).toContain('top: 20px')
    expect(wrapper.find('.f-notification__title').text()).toBe(NAME)
    expect(wrapper.find('.f-notification__message').text()).toBe(AXIOM)
  })

  test('should render when the `title` prop is VNode', () => {
    const wrapper = mount(FNotificationVue, {
      props: {
        message: h('span', { class: 'name' }, NAME)
      }
    })
    expect(wrapper.find('.name').text()).toBe(NAME)
  })

  test('should render when the `message` prop is VNode', () => {
    const wrapper = mount(FNotificationVue, {
      props: {
        message: h('span', { class: 'axiom' }, AXIOM)
      }
    })
    expect(wrapper.find('.axiom').text()).toBe(AXIOM)
  })

  test('type', () => {
    FIGHTING_TYPE.forEach((type) => {
      const wrapper = mount(FNotificationVue, {
        props: {
          type
        }
      })
      expect(wrapper.find(`.f-notification__${type}`).exists()).toBe(true)
    })
  })

  test('round', () => {
    const wrapper = mount(FNotificationVue, {
      props: {
        round: true
      }
    })
    expect(wrapper.find('.f-notification__round').exists()).toBe(true)
  })

  test('icon', () => {
    const wrapper = mount(FNotificationVue, {
      props: {
        icon: markRaw(FIconInfo)
      }
    })
    expect(wrapper.findComponent(FIconInfo).exists()).toBe(true)
  })

  test('color', () => {
    const wrapper = mount(FNotificationVue, {
      props: {
        color: 'red'
      }
    })
    expect(wrapper.find('.f-notification').attributes('style')).toContain('--notification-color: red')
  })

  test('background', () => {
    const wrapper = mount(FNotificationVue, {
      props: {
        background: 'red'
      }
    })
    expect(wrapper.find('.f-notification').attributes('style')).toContain('--notification-background: red')
  })

  test('offset', () => {
    const wrapper = mount(FNotificationVue, {
      props: {
        offset: 40
      }
    })
    expect(wrapper.find('.f-notification').attributes('style')).toContain('top: 40px')
  })

  test('zIndex', () => {
    const wrapper = mount(FNotificationVue, {
      props: {
        zIndex: 100
      }
    })
    expect(wrapper.find('.f-notification').attributes('style')).toContain('--notification-z-index: 100')
  })

  test('placement', () => {
    const notificationPlacement: NotificationPlacement[] = ['top-left', 'top-right', 'bottom-left', 'bottom-right']
    notificationPlacement.forEach((placement) => {
      const wrapper = mount(FNotificationVue, {
        props: {
          placement
        }
      })
      expect(wrapper.find('.f-notification').classes()).toContain(`f-notification__${placement}`)
    })
  })

  describe('close action', () => {
    test('notification should be closable when close button is clicked', async () => {
      const wrapper = mount(FNotificationVue, {
        props: {
          close: true
        }
      })
      const closeBtn = wrapper.find('.f-notification__close')
      expect(closeBtn.exists()).toBe(true)
      await closeBtn.trigger('click')
      expect(wrapper.find('.f-notification').isVisible()).toBe(false)
    })

    test('closeBtn is a icon', () => {
      const wrapper = mount(FNotificationVue, {
        props: {
          close: true,
          closeBtn: markRaw(FIconCross)
        }
      })
      expect(wrapper.findComponent(FIconCross).exists()).toBe(true)
    })

    test('closeBtn is a string type', () => {
      const wrapper = mount(FNotificationVue, {
        props: {
          close: true,
          closeBtn: 'close'
        }
      })
      expect(wrapper.find('.f-notification__close').text()).toBe('close')
    })

    test('onClose callback should be invoked when the close button is clicked', async () => {
      const onClose = vi.fn()
      const wrapper = mount(FNotificationVue, {
        props: {
          close: true,
          onClose
        }
      })
      const closeBtn = wrapper.find('.f-notification__close')
      await closeBtn.trigger('click')
      expect(onClose).toHaveBeenCalled()
    })

    test('notification should be closable after duration', async () => {
      vi.useFakeTimers()
      const wrapper = mount(FNotificationVue, {
        props: { duration: 1000 }
      })
      const vm = wrapper.vm as unknown as NotificationInstance
      expect(vm.visible).toBe(true)
      vi.runAllTimers()
      expect(vm.visible).toBe(false)
      vi.useRealTimers()
    })

    test('notification should not be closable when duration is set to 0', async () => {
      vi.useFakeTimers()
      const wrapper = mount(FNotificationVue, {
        props: { duration: 0 }
      })
      const vm = wrapper.vm as unknown as NotificationInstance
      expect(vm.visible).toBe(true)
      vi.runAllTimers()
      expect(vm.visible).toBe(true)
      vi.useRealTimers()
    })

    test('notification should prevent closure when mouse is hovered over it', async () => {
      vi.useFakeTimers()
      const wrapper = mount(FNotificationVue, {
        props: { duration: 1000 }
      })
      const vm = wrapper.vm as unknown as NotificationInstance
      expect(vm.visible).toBe(true)
      await wrapper.find('.f-notification').trigger('mouseenter')
      vi.runAllTimers()
      expect(vm.visible).toBe(true)
      await wrapper.find('.f-notification').trigger('mouseleave')
      vi.runAllTimers()
      expect(vm.visible).toBe(false)
      vi.useRealTimers()
    })
  })
})
