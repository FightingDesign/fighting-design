import type { Props } from './message'
import type { ComponentInternalInstance } from 'vue'

export interface FMessageInstance {
  visible: number
  bottom: number
  id: string
  vm: ComponentInternalInstance
  close: () => void
}

type Mutable<T> = { -readonly [P in keyof T]: T[P] }

export type InstanceOptions<T> = Partial<Mutable<T>> & {
  onDestroy?: () => void
}
