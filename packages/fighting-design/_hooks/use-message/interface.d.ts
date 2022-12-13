import type { ComponentInternalInstance } from 'vue'
import type { MessageType, MessageProps } from '../../message'

type InstanceOptions<T> = Partial<Mutable<T>> & {
  onDestroy?: () => void
}

export interface MessageFn {
  (options: MessageOptions | string): MessageInstance
}

export type MessageFnWithType = {
  [key in MessageType]: (text: string) => MessageInstance
}

export type MessageOptions = InstanceOptions<MessageProps>

export interface MessageInstance {
  visible: number
  bottom: number
  id: string
  vm: ComponentInternalInstance
  close: () => void
}

export interface UseMessageReturnInterface {
  instance: MessageFn & MessageFnWithType
}
