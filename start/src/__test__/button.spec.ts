import { mount } from '@vue/test-utils'
import App from '../App.vue'

const MessageComponent = {
  template: '<p>{{ msg }}</p>',
  props: ['msg']
}

test('displays message', () => {
  const wrapper = mount(App, {
    props: {
      msg: 'Hello world'
    }
  })

  expect(wrapper.text()).toContain('Hello world')
})