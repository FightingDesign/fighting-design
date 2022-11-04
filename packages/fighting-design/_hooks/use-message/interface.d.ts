import type { Component, ComponentInternalInstance } from 'vue'
import type {
  MessagePlacementType,
  MessageType,
  MessagePropsType
} from '../../message/src/interface'
import type { NotificationPlacementType } from '../../notification/src/interface'
export * from '../../message/src/interface'

type InstanceOptions<T> = Partial<Mutable<T>> & {
  onDestroy?: () => void
}

export interface MessageFn {
  (options: MessageOptions | string): MessageInstance
}

export type MessageFnWithType = {
  [key in MessageType]: (text: string) => void
}

export type MessageOptions = InstanceOptions<MessagePropsType>

export interface DefaultOptionsInterface {
  message: { placement: MessagePlacementType }
  notification: { placement: NotificationPlacementType }
}

export interface ComponentVueInterface {
  message: Component
  notification: Component
}

export interface MessageInstance {
  visible: number
  bottom: number
  id: string
  vm: ComponentInternalInstance
  close: () => void
}

export interface UseMessageReturnInterface { instance: MessageFn & Partial<MessageFnWithType> }

export interface UseMessageInterface {
  (target: 'message' | 'notification'): UseMessageReturnInterface
}
