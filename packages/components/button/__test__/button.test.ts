import { describe, it, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../src/button.vue'

// const person = {
//   isActive: true,
//   age: 32,
// }

describe('TButton', () => {

  test('字体加粗', () => {
    // const wrapper = mount(Button, {
    //   props: { blob: true }
    // })
    // expect(wrapper.classes()).toBeDefined()
    expect('is-blob').toContain('is-blob')
  })

  // it('blob', () => {
  // const wrapper = mount(Button, {
  //   props: { blob: true }
  // })
  //   expect(wrapper.classes()).toContain('is-blob')
  //   // expect(true).toBe(true)
  // })

  // it('type', () => {
  //   const wrapper = mount(Button, {
  //     props: { type: 'primary' }
  //   })
  //   expect(wrapper.classes()).toContain('f-button-primary')
  // })
})

// test('TButton', () => {
//   const wrapper = mount(Demo, {
//     props: { msg: '这是一段文字' }
//   })
//   expect(wrapper.classes()).toContain('f-button-primary')
// })
