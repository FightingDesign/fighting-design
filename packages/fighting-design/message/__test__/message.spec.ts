import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import FMessageVue from '../src/message.vue'
import type { ComponentPublicInstance } from 'vue'

type MessageInstance = ComponentPublicInstance<{
  visible: boolean
}>

const sleep = (time: number): Promise<unknown> => {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

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

  test('click-close', async () => {
    const wrapper = mount(FMessageVue, {
      props: {
        message: '这是一段内容',
        type: 'success',
        close: true,
        duration: 0
      }
    })

    expect(wrapper.find('.f-message__close').exists()).toBe(true)
    // 等待过渡动画结束
    await sleep(400)
    expect(wrapper.find('.f-message').isVisible()).toBe(true)
    await wrapper.find('.f-message__close').trigger('click')
    expect((wrapper.vm as unknown as MessageInstance).visible).toBe(false)
  })
})
