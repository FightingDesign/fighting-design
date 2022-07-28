import messageVue from './message.vue'
import { messageTypes } from './message'
import type { MessageOptions, messageType } from './message'
import type { ComponentInternalInstance } from 'vue'
import { createVNode, render } from 'vue'

export type FMessageFn = (
  options: MessageOptions | string
) => FMessageReturnType
export interface FMessageReturnType {
  vm: ComponentInternalInstance
  close: () => void
}
type FMessageFnWithType = {
  [key in messageType]: FMessageFn
}

const FMessage: FMessageFn & Partial<FMessageFnWithType> = (options) => {
  const container = document.createElement('div')

  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  /**
   * 关闭动画结束时，移除dom
   */
  options.onDestroy = () => {
    render(null, container)
    ;(options as MessageOptions).closeEnd?.()
  }

  const VNode = createVNode(messageVue, options)

  render(VNode, container)

  document.body.appendChild(container.firstElementChild!)

  const vm = VNode.component!
  return {
    vm,
    close: () => {
      vm.exposed!.close()
    }
  }
}

messageTypes.forEach((type) => {
  FMessage[type] = FMessage
})

export default FMessage
