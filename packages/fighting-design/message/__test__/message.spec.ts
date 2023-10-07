import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import FMessageVue from '../src/message.vue'

describe('FMessage', () => {
  test('base', async () => {
    const wrapper = mount(FMessageVue, {
      props: {
        message: '这是一段内容',
        type: 'success'
      }
    })
    expect(wrapper.find('.f-message').exists()).toBe(true)
    expect(wrapper.find('.f-message__success').exists()).toBe(true)
    await wrapper.setProps({ type: 'primary' })
    expect(wrapper.find('.f-message__primary').exists()).toBe(true)
    await wrapper.setProps({ close: true })
    expect(wrapper.find('.f-message__close').exists()).toBe(true)
  })
})
