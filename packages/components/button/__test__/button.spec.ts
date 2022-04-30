import { mount } from '@vue/test-utils'
import Button from '../src/button.vue'

test('displays message', () => {
  const wrapper = mount(Button, {
    blob: {
      blob: true
    }
  })
  expect(wrapper.classes()).toContain('is-blob')
})
