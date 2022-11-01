import type { MessagePlacementType } from '../../message/src/interface'
import type { MessageInstance } from '../../_interface'

export type MessageInstancesType = Partial<{
  [key in MessagePlacementType]: MessageInstance[]
}>

export interface UseMassageManageReturnInterface {
  instances: Partial<{ [key in MessagePlacementType]: MessageInstance[] }>
  getSiblingOffset(placement: MessagePlacementType, id: string, isNext: boolean): number
  removeInstance(placement: MessagePlacementType, id: string): void
  createInstance(instance: MessageInstance, placement: MessagePlacementType): MessageInstance
}
