import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import FMessageVue, { FMessage } from '../index'
import type { Ref } from 'vue'

// type MessageInstance = ComponentPublicInstance<{
//   visible: boolean
// }>

const sleep = (time: number): Promise<unknown> => {
  return new Promise((resolve) => {
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
    expect(wrapper.find('.f-message').exists()).toBe(false)
    expect(wrapper.find('.f-message__success').exists()).toBe(false)
    await wrapper.setProps({ type: 'primary' })
    expect(wrapper.find('.f-message__primary').exists()).toBe(false)
    await wrapper.setProps({ close: true })
    expect(wrapper.find('.f-message__close').exists()).toBe(false)
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

    expect(wrapper.find('.f-message__close').exists()).toBe(false)
    // expect(wrapper.find('.f-message').isVisible()).toBe(true)
    // await wrapper.find('.f-message__-close').trigger('click')
    // expect((wrapper.vm as unknown as MessageInstance).visible).toBe(false)
  })

  test('use func', async () => {
    const messageReturn = FMessage({
      message: 'message-test'
    })

    expect(messageReturn).toHaveProperty('close')
    expect(messageReturn).toHaveProperty('vm')
    expect(messageReturn.vm.exposed).toHaveProperty('visible')

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((messageReturn.vm.exposed as Record<string, Ref>).visible.value).toBe(true)
    await sleep(3000)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((messageReturn.vm.exposed as Record<string, Ref>).visible.value).toBe(false)
  })
})
