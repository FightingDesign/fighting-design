import messageVue from './message.vue'
import type { MessageProps } from './message'
import { createVNode, render } from 'vue'

function FMessage (options: MessageProps) {
  const container = document.createElement('div')

  const VNode = createVNode(messageVue, options, options.message || null)

  render(VNode, container)

  document.body.appendChild(container.firstElementChild!)
}

export default FMessage
