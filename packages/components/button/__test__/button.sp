import { mount } from '@vue/test-utils'
import Button from '../src/button.vue'
import { describe, it } from 'vitest'

test('TButton', () => {
  const wrapper = mount(Button, {
    props: { type: 'primary' }
  })
  expect(wrapper.classes()).toContain('f-button-primary')
})


// describe('TButton', () => {
//   it('type', () => {
//     const wrapper = mount(Button, {
//       props: { type: 'primary' }
//     })
//     expect(wrapper.classes()).toContain('f-button-primary')
//   })
// })


