import messageVue from '../../notification/src/notification.vue'
import { render, createVNode } from 'vue'
import { useMassageManage } from '../../_hooks'
import { notificationTypes } from './type'
import type { FMessageInstance } from '../../_interface'
import type { notificationPlacementType } from '../../notification/src/interface'
import type { ComponentInternalInstance } from 'vue'
import type { FNotificationFnWithType, FNotificationFn, NotificationOptions } from '../../_interface'

export const massageManage = useMassageManage<notificationPlacementType>()

const defaultOptions: {
  placement: notificationPlacementType
} = {
  placement: 'top-right'
}

let seed = 1

const FMessage: FNotificationFn & Partial<FNotificationFnWithType> = (
  options
): FMessageInstance => {
  const container = document.createElement('div')
  const id = `message-${seed}`

  if (typeof options === 'string') {
    options = {
      message: options
    } as NotificationOptions
  }
  const props: NotificationOptions & typeof defaultOptions = {
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

notificationTypes.forEach((type): void => {
  FMessage[type] = (text: string): void => {
    FMessage({ message: text, type })
  }
})

export default FMessage as FNotificationFn & FNotificationFnWithType
