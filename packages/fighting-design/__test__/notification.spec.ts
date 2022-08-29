import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import FNotificationVue from '../notification/src/notification.vue'
import { FNotification } from '../index'
import type { ComponentPublicInstance } from 'vue'

type MessageInstance = ComponentPublicInstance<{
  visible: boolean
}>

const sleep = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

describe('FNotification', () => {
  test('base', async () => {
    const wrapper = mount(FNotificationVue, {
      props: {
        message: 'notification-test',
        type: 'success'
      }
    })
    expect(wrapper.find('.f-notification').exists()).toBe(true)
    expect(wrapper.find('.f-notification--text').text()).toBe(
      'notification-test'
    )
    expect(wrapper.find('.f-notification-success').exists()).toBe(true)
    await wrapper.setProps({ type: 'primary' })
    expect(wrapper.find('.f-notification-primary').exists()).toBe(true)
    await wrapper.setProps({ close: true })
    expect(wrapper.find('.f-notification--close').exists()).toBe(true)
  })

  test('click-close', async () => {
    const wrapper = mount(FNotificationVue, {
      props: {
        message: 'notification-test',
        type: 'success',
        close: true,
        duration: 0
      }
    })

    expect(wrapper.find('.f-notification--close').exists()).toBe(true)

    expect(wrapper.find('.f-notification').isVisible()).toBe(true)

    await wrapper.find('.f-notification--close').trigger('click')
    expect((wrapper.vm as unknown as MessageInstance).visible).toBe(false)
  })

  test('use func', async () => {
    const messageReturn = FNotification({
      message: 'notification-test'
    })

    expect(messageReturn).toHaveProperty('close')
    expect(messageReturn).toHaveProperty('vm')
    expect(messageReturn.vm.exposed).toHaveProperty('visible')

    expect(messageReturn.vm.exposed!.visible.value).toBe(true)
    await sleep(3000)
    expect(messageReturn.vm.exposed!.visible.value).toBe(false)
  })
})
