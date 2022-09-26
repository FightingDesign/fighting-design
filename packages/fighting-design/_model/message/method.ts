import messageVue from '../../message/src/message.vue'
import { messageTypes } from './type'
import { useMassageManage } from '../../_hooks'
import { render, createVNode } from 'vue'
import type { messagePlacementType } from '../../message/src/interface'
import type {
  FMessageInstance,
  FMessageFnWithType,
  MessageOptions,
  FMessageFn
} from '../../_interface'
import type { ComponentInternalInstance } from 'vue'

export const massageManage = useMassageManage<messagePlacementType>()

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
  props.onDestroy = (): void => {
    props.closeEnd?.()
    render(null, container)
  }

  const VNode = createVNode(messageVue, props)

  render(VNode, container)

  document.body.appendChild(container.firstElementChild as HTMLElement)

  const vm: ComponentInternalInstance =
    VNode.component as ComponentInternalInstance

  seed++

  const instance = massageManage.createInstance(
    {
      id,
      vm,
      close: () => {
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

export default FMessage as FMessageFn & FMessageFnWithType
