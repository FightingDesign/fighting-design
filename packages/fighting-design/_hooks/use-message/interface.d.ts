import type { ComponentInternalInstance } from 'vue'
import type { MessageProps } from '../../message'
import type { FightingType } from '../../_interface'

type InstanceOptions<T> = Partial<Mutable<T>> & {
  onDestroy?: () => void
}

export interface MessageFn {
  (options: MessageOptions | string): MessageInstance
}

export type MessageFnWithType = {
  [key in FightingType]: (text: string) => MessageInstance
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
