import messageVue from './message.vue'
import { messageTypes } from './message'
import type { FPropsType, messagePlacementType, messageType } from './message'
import type {
  InstanceOptions,
  FMessageInstance
} from '../../_interface'
import { useMassageManage } from '../../_hooks/useMessageMange'
import type { ComponentInternalInstance } from 'vue';
import { render, createVNode } from 'vue'

type FMessageFnWithType = {
  [key in messageType]: (text: string) => void
}

type MessageOptions = InstanceOptions<FPropsType>
interface FMessageFn {
  (options: MessageOptions | string): FMessageInstance
}

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
