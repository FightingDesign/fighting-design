import type { MessagePlacementType } from '../../message/src/interface'
import type { MessageInstance } from '../use-message/interface'
export type { MessageInstance } from '../use-message/interface'
export type { MessagePlacementType, MessagePlacementType } from '../../message/src/interface'

export type MessageInstancesType = Partial<{
  [key in MessagePlacementType]: MessageInstance[]
}>

export interface UseMassageManageReturnInterface {
  instances: Partial<{ [key in MessagePlacementType]: MessageInstance[] }>
  getSiblingOffset: (placement: MessagePlacementType, id: string, isNext: boolean) => ComputedRef<number>
  removeInstance: (placement: MessagePlacementType, id: string) => void
  createInstance: (instance: MessageInstance, placement: MessagePlacementType) => MessageInstance
}
