import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import FNotificationVue from '../src/notification.vue'

describe('FNotification', () => {
  test('base', async () => {
    const wrapper = mount(FNotificationVue, {
      props: { message: '这是一段内容', type: 'success' }
    })
    expect(wrapper.find('.f-notification').exists()).toBe(true)
    expect(wrapper.find('.f-notification__content').text()).toBe('这是一段内容')
    expect(wrapper.find('.f-notification__success').exists()).toBe(true)
    await wrapper.setProps({ type: 'primary' })
    expect(wrapper.find('.f-notification__primary').exists()).toBe(true)
    await wrapper.setProps({ close: true })
    expect(wrapper.find('.f-notification__close').exists()).toBe(true)
  })
})
