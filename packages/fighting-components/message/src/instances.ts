import { reactive } from 'vue'
import type { messagePlacementType } from './message'
import type { FMessageInstance } from './interface'

export const instances: Partial<{
  [key in messagePlacementType]: FMessageInstance[]
}> = reactive({})

const getInstanceIndex = (
  placement: messagePlacementType,
  id: string
): number => {
  if (!instances[placement]) return -1
  return instances[placement]!.findIndex((item) => item.id === id)
}

export const getSiblingOffset = (
  placement: messagePlacementType,
  id: string,
  isNext: boolean
): number => {
  const idx: number = getInstanceIndex(placement, id)
  if (idx === -1) return 0
  const beforeInstance: FMessageInstance =
    instances[placement]![isNext ? idx + 1 : idx - 1] || null
  if (!beforeInstance) return 0
  return beforeInstance.vm.exposeProxy!.bottom
}

export const removeInstance = (
  placement: messagePlacementType,
  id: string
): void => {
  const idx: number = getInstanceIndex(placement, id)
  instances[placement]!.splice(idx, 1)
}
