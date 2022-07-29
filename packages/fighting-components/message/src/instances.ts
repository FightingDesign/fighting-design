import { reactive } from 'vue'
import type { FMessageInstance, messagePlacementType } from './message'

export const instances: Partial<{
  [key in messagePlacementType]: FMessageInstance[]
}> = reactive({})

function getInstanceIndex (placement: messagePlacementType, id: string): number {
  if (!instances[placement]) return -1
  return instances[placement]!.findIndex((item) => item.id === id)
}

export const getSiblingOffset = (
  placement: messagePlacementType,
  id: string,
  isNext: boolean
): number => {
  const idx = getInstanceIndex(placement, id)
  if (idx === -1) return 0
  const preInstamce = instances[placement]![isNext ? idx + 1 : idx - 1] || null
  if (!preInstamce) return 0
  return preInstamce.vm.exposeProxy!.bottom
}

export const removeInstance = (
  placement: messagePlacementType,
  id: string
): void => {
  const idx = getInstanceIndex(placement, id)
  instances[placement]!.splice(idx, 1)
}
