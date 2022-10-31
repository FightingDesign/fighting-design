export type MessageInstancesType = Partial<{
  [key in messagePlacementType]: MessageInstance[]
}>

export interface UseMassageManageReturnInterface {
  instances: Partial<{ [key in messagePlacementType]: MessageInstance[] }>
  getSiblingOffset(placement: messagePlacementType, id: string, isNext: boolean): number
  removeInstance(placement: messagePlacementType, id: string): void
  createInstance(instance: MessageInstance, placement: messagePlacementType): MessageInstance
}
