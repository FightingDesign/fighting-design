import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import FMessageVue from '@fighting-design/fighting-components/message/src/message.vue'
import type { ComponentPublicInstance } from 'vue'
import { FMessage } from '@fighting-design/fighting-components'

type MessageInstance = ComponentPublicInstance<{
  visible: boolean
}>

const sleep = (time: number) => {
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
    expect(wrapper.find('.f-message').exists()).toBe(true)
    expect(wrapper.find('.f-message--text').text()).toBe('message-test')
    expect(wrapper.find('.f-message-success').exists()).toBe(true)
    await wrapper.setProps({ type: 'primary' })
    expect(wrapper.find('.f-message-primary').exists()).toBe(true)
    await wrapper.setProps({ close: true })
    expect(wrapper.find('.f-message--close').exists()).toBe(true)
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

    expect(wrapper.find('.f-message--close').exists()).toBe(true)

    expect(wrapper.find('.f-message').isVisible()).toBe(true)

    await wrapper.find('.f-message--close').trigger('click')
    expect((wrapper.vm as unknown as MessageInstance).visible).toBe(false)
  })

  test('use func', async () => {
    const messageReturn = FMessage({
      message: 'message-test'
    })

    expect(messageReturn).toHaveProperty('close')
    expect(messageReturn).toHaveProperty('vm')
    expect(messageReturn.vm.exposed).toHaveProperty('visible')

    expect(messageReturn.vm.exposed!.visible.value).toBe(true)
    await sleep(3000)
    expect(messageReturn.vm.exposed!.visible.value).toBe(false)
  })
})
