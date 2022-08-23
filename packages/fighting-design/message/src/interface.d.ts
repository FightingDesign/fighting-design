import type { Props } from './message'
import type { ExtractPropTypes, ComponentInternalInstance } from 'vue'

export interface FMessageInstance {
  id: string
  vm: ComponentInternalInstance
  close: () => void
}

type Mutable<T> = { -readonly [P in keyof T]: T[P] }

export type MessageProps = Partial<Mutable<ExtractPropTypes<typeof Props>>>

export type MessageOptions = MessageProps & {
  onDestroy?: () => void
}
