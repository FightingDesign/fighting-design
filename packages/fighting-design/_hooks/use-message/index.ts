import messageVue from '../../message/src/message.vue'
import notificationVue from '../../notification/src/notification.vue'
import { render, createVNode } from 'vue'
import { useMassageManage } from '../../_hooks'
import type { MessageInstance, MessageFnWithType, MessageOptions, MessageFn } from '../../_interface'
import type { ComponentInternalInstance, VNode } from 'vue'

export const massageManage = useMassageManage()

const messageTypes = ['default', 'primary', 'success', 'danger', 'warning']

export const useMessage = (target: 'message' | 'notification'): object => {
  let seed = 1

  const defaultOptions = {
    message: { placement: 'top' },
    notification: { placement: 'top-right' }
  }

  const componentVue = {
    message: messageVue,
    notification: notificationVue
  }

  const FMessage: MessageFn & Partial<MessageFnWithType> = (options): MessageInstance => {
    const container: HTMLDivElement = document.createElement('div')
    const id = `message-${seed}`

    if (typeof options === 'string') {
      options = {
        message: options
      } as MessageOptions
    }
    const props: MessageOptions & typeof defaultOptions = {
      id,
      ...defaultOptions[target],
      ...options
    }

    /**
     * 关闭动画结束时，移除dom
     */
    props.onDestroy = (): void => {
      props.closeEnd?.()
      render(null, container)
    }

    // const VNode: VNode = createVNode(messageVue, props)
    const VNode: VNode = createVNode(componentVue[target], props)

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
          ((vm as ComponentInternalInstance).exposed as MessageInstance).close()
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

  return {
    // massageManage,
    FMessage
  }

}
