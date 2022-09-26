import type { ComponentInternalInstance } from 'vue'
import type { MessagePropsType } from '../message/src/message'
import type { messageType } from '../message/src/interface'

export type InstanceOptions<T> = Partial<Mutable<T>> & {
  onDestroy?: () => void
}

export interface FMessageInstance {
  visible: number
  bottom: number
  id: string
  vm: ComponentInternalInstance
  close: () => void
}

export type FMessageFnWithType = {
  [key in messageType]: (text: string) => void
}

export type MessageOptions = InstanceOptions<MessagePropsType>

export interface FMessageFn {
  (options: MessageOptions | string): FMessageInstance
}

type Mutable<T> = { -readonly [P in keyof T]: T[P] }

export interface useMassageManageReturnInterface {
  instances: Partial<{ [key in messagePlacementType]: FMessageInstance[] }>
  getSiblingOffset(placement: messagePlacementType, id: string, isNext: boolean): number
  removeInstance(placement: messagePlacementType, id: string): void
  createInstance(instance: FMessageInstance, placement: messagePlacementType): FMessageInstance
}
