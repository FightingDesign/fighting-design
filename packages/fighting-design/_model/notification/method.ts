import messageVue from '../../notification/src/notification.vue'
import { render, createVNode } from 'vue'
import { useMassageManage } from '../../_hooks'
import { notificationTypes } from './type'
import { isString } from '../../_utils'
import type { NotificationInstance } from '../../_interface'
import type { NotificationPlacementType } from '../../notification/src/interface'
import type { ComponentInternalInstance, VNode } from 'vue'
import type { NotificationFnWithType, FNotificationFn, NotificationOptions } from '../../_interface'

export const massageManage = useMassageManage<NotificationPlacementType>()

const defaultOptions: {
  placement: NotificationPlacementType
} = {
  placement: 'top-right'
}

let seed = 1

const FMessage: FNotificationFn & Partial<NotificationFnWithType> = (
  options
): NotificationInstance => {
  const container: HTMLDivElement = document.createElement('div')
  const id = `message-${seed}`

  if (isString(options)) {
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

notificationTypes.forEach((type): void => {
  FMessage[type] = (text: string): void => {
    FMessage({ message: text, type })
  }
})

export default FMessage as FNotificationFn & NotificationFnWithType
