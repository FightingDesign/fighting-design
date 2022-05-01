import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../src/button.vue'

describe('TButton', () => {

  it('blob', () => {
    const wrapper = mount(Button, {
      props: { blob: true }
    })
    expect(wrapper.classes()).toContain('is-blob')
    // expect(true).toBe(true)
  })
})

// test('TButton', () => {
//   const wrapper = mount(Demo, {
//     props: { msg: '这是一段文字' }
//   })
//   expect(wrapper.classes()).toContain('f-button-primary')
// })
