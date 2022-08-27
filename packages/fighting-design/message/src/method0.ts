import messageVue from './message.vue'
import { messageTypes } from './message'
import type { messageType, messagePlacementType } from './message'
import type { ComponentInternalInstance } from 'vue'
import { createVNode, render } from 'vue'
import { instances } from './instances'
import type { FMessageInstance, MessageOptions } from './interface'

type FMessageFnWithType = {
  [key in messageType]: (text: string) => void
}

export interface FMessageFn {
  (options: MessageOptions | string): FMessageInstance
}

const defaultOptions: {
  placement: messagePlacementType
} = {
  placement: 'top'
}

// message 的实例组
let seed = 1

const FMessage: FMessageFn & Partial<FMessageFnWithType> = (
  options
): FMessageInstance => {
  const container = document.createElement('div')
  const id = `message-${seed}`

  if (typeof options === 'string') {
    options = {
      message: options
    } as MessageOptions
  }

  const props: MessageOptions & typeof defaultOptions = {
    id,
    ...defaultOptions,
    ...options
  }

  /**
   * 关闭动画结束时，移除dom
   */
  props.onDestroy = () => {
    props.closeEnd?.()
    render(null, container)
  }

  const VNode = createVNode(messageVue, props)

  render(VNode, container)

  document.body.appendChild(container.firstElementChild as HTMLElement)

  const vm: ComponentInternalInstance =
    VNode.component as ComponentInternalInstance

  seed++

  const instance: FMessageInstance = {
    id,
    vm,
    close: () => {
      ;(
        (vm as ComponentInternalInstance).exposeProxy as Record<
          string,
          Function
        >
      ).close()
    },
    bottom: 0,
    visible: 0
  }

  /**
   * 添加到实例组中
   */
  if (instances[props.placement]) {
    ;(instances[props.placement] as FMessageInstance[]).push(instance)
  } else {
    instances[props.placement] = [instance]
  }

  return instance
}
messageTypes.forEach((type) => {
  FMessage[type] = (text: string) => {
    FMessage({ message: text, type })
  }
})

export default FMessage as FMessageFn & FMessageFnWithType
