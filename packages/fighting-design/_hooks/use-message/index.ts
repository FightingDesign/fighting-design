import messageVue from '../../message/src/message.vue'
import notificationVue from '../../notification/src/notification.vue'
import { render, createVNode } from 'vue'
import { useMassageManage } from '../../_hooks'
import type { ComponentInternalInstance, VNode } from 'vue'
import type {
  DefaultOptionsInterface,
  ComponentVueInterface,
  MessageInstance,
  MessageFn,
  MessageOptions,
  MessageFnWithType,
  MessagePlacementType,
  UseMessageInterface,
  UseMessageReturnInterface
} from './interface'

export const massageManage = useMassageManage()

export const useMessage: UseMessageInterface = (target: 'message' | 'notification'): UseMessageReturnInterface => {
  let seed = 1

  // 位置信息
  const defaultOptions: DefaultOptionsInterface = {
    message: { placement: 'top' },
    notification: { placement: 'top-right' }
  } as const

  // 组件实例
  const componentVue: ComponentVueInterface = {
    message: messageVue,
    notification: notificationVue
  }

  const instance: MessageFn & Partial<MessageFnWithType> = (options): MessageInstance => {
    const container: HTMLDivElement = document.createElement('div')
    const id = `message-${seed}`

    if (typeof options === 'string') {
      options = {
        message: options
      } as MessageOptions
    }

    const props: MessageOptions = {
      id,
      ...defaultOptions[target],
      ...options
    } as const

    /**
     * 关闭动画结束时，移除dom
     */
    props.onDestroy = (): void => {
      props.closeEnd && props.closeEnd()
      render(null, container)
    }

    const VNode: VNode = createVNode(componentVue[target], props)

    render(VNode, container)
    document.body.appendChild(container.firstElementChild as HTMLElement)
    const vm: ComponentInternalInstance = VNode.component as ComponentInternalInstance

    seed++
    const instance: MessageInstance = massageManage.createInstance(
      {
        id,
        vm,
        close: (): void => {
          ((vm as ComponentInternalInstance).exposed as MessageInstance).close()
        },
        bottom: 0,
        visible: 0
      },
      props.placement as MessagePlacementType
    )

    return instance
  }

  const messageTypes = ['default', 'primary', 'success', 'danger', 'warning'] as const

  messageTypes.forEach((type): void => {
    instance[type] = (text: string): void => {
      instance({ message: text, type })
    }
  })

  return { instance } as const
}
