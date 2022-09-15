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

export interface useMassageManageReturnInterface {
  instances: Partial<{ [key in messagePlacementType]: FMessageInstance[] }>
  getSiblingOffset(placement: messagePlacementType, id: string, isNext: boolean): number
  removeInstance(placement: messagePlacementType, id: string): void
  createInstance(instance: FMessageInstance, placement: messagePlacementType): FMessageInstance
}
