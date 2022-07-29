import type { ExtractPropTypes, ComponentInternalInstance } from 'vue'

export interface FMessageInstance {
  id: string
  vm: ComponentInternalInstance
  close: () => void
}

type Mutable<T> = { -readonly [P in keyof T]: T[P] }

// 导出为可选、可写
export type MessageProps = Partial<Mutable<ExtractPropTypes<typeof Props>>>

export type MessageOptions = MessageProps & {
  onDestroy?: () => void
}
