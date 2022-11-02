import type { ComponentInternalInstance } from 'vue'
import type { MessagePropsType } from '../message/src/props'
import type { MessageType } from '../message/src/interface'
import type { MessagePlacementType } from '../message/src/interface'

export type InstanceOptions<T> = Partial<Mutable<T>> & {
  onDestroy?: () => void
}

export interface MessageInstance {
  visible: number
  bottom: ComputedRef<number>
  id: string
  vm: ComponentInternalInstance
  close: () => void
}

export type MessageFnWithType = {
  [key in MessageType]: (text: string) => void
}

export type MessageOptions = InstanceOptions<MessagePropsType>

export interface MessageFn {
  (options: MessageOptions | string): MessageInstance
}

type Mutable<T> = { -readonly [P in keyof T]: T[P] }

export interface UseMassageManageReturnInterface {
  instances: Partial<{ [key in MessagePlacementType]: MessageInstance[] }>
  getSiblingOffset(placement: MessagePlacementType, id: string, isNext: boolean): ComputedRef<number>
  removeInstance(placement: MessagePlacementType, id: string): void
  createInstance(instance: MessageInstance, placement: MessagePlacementType): MessageInstance
}
