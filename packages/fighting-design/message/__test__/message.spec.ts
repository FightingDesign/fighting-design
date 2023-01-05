import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FMessage } from '../../index'
import FMessageVue from '../src/message.vue'

import type { ComponentPublicInstance, Ref } from 'vue'

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
        message: 'message-test',
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
        message: 'message-test',
        type: 'success',
        close: true,
        duration: 0
      }
    })

    expect(wrapper.find('.f-message__close').exists()).toBe(true)
    expect(wrapper.find('.f-message').isVisible()).toBe(true)
    await wrapper.find('.f-message__close').trigger('click')
    expect((wrapper.vm as unknown as MessageInstance).visible).toBe(false)
  })

  test('use func', async () => {
    const messageReturn = FMessage({
      message: 'message-test',
      type: 'success'
    })

    expect(messageReturn).toHaveProperty('id')
    expect(messageReturn).toHaveProperty('vm')
    expect(messageReturn).toHaveProperty('close')
    expect(messageReturn.close).toBeTypeOf('function')
    expect(messageReturn).toHaveProperty('bottom')
    expect(messageReturn.vm.exposed).toHaveProperty('visible')

    expect((messageReturn.vm.exposed as Record<string, Ref>).visible.value).toBe(true)
    await sleep(3000)
    expect((messageReturn.vm.exposed as Record<string, Ref>).visible.value).toBe(false)
  })
})
