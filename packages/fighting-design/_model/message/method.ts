import messageVue from '../../message/src/message.vue'
import { render, createVNode } from 'vue'
import { useMassageManage } from '../../_hooks'
import { messageTypes } from './type'
import type { MessagePlacementType } from '../../message/src/interface'
import type { MessageInstance, MessageFnWithType, MessageOptions, MessageFn } from '../../_interface'
import type { ComponentInternalInstance , VNode } from 'vue'

export const massageManage = useMassageManage<MessagePlacementType>()

const defaultOptions: {
  placement: MessagePlacementType
} = {
  placement: 'top'
}

// message 的实例组
let seed = 1

const FMessage: MessageFn & Partial<MessageFnWithType> = (
  options
): MessageInstance => {
  const container: HTMLDivElement = document.createElement('div')
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
  props.onDestroy = (): void => {
    props.closeEnd?.()
    render(null, container)
  }

  const VNode: VNode = createVNode(messageVue, props)

  render(VNode, container)

  document.body.appendChild(container.firstElementChild as HTMLElement)

  const vm: ComponentInternalInstance =
    VNode.component as ComponentInternalInstance

  seed++

  const instance = massageManage.createInstance(
    {
      id,
      vm,
      close: (): void => {
        (
          (vm as ComponentInternalInstance).exposeProxy as Record<
            string,
            Function
          >
        ).close()
      },
      bottom: 0,
      visible: 0
    },
    props.placement
  )

  return instance
}

messageTypes.forEach((type): void => {
  FMessage[type] = (text: string): void => {
    FMessage({ message: text, type })
  }
})

export default FMessage as MessageFn & MessageFnWithType
