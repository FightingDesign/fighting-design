import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import FMessageVue from '@fighting-design/fighting-components/message/src/message.vue'
import type { ComponentPublicInstance } from 'vue'

// const sleep = (time: number) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve()
//     }, time)
//   })
// }

type MessageInstance = ComponentPublicInstance<{
  visible: boolean
}>

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
})
