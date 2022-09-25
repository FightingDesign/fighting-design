import { reactive } from 'vue'
import type { FMessageInstance, useMassageManageReturnInterface } from '../../_interface'

/**
 * 创建弹出的消息体实例
 * @returns
 */
export const useMassageManage = <messagePlacementType extends string>(): useMassageManageReturnInterface => {
  const instances: Partial<{
    [key in messagePlacementType]: FMessageInstance[]
  }> = reactive({})

  /**
   * 通过方位与id，获取目标实例
   * @param placement
   * @param id
   * @returns
   */
  const getInstanceIndex = (
    placement: messagePlacementType,
    id: string
  ): number => {
    if (!instances[placement]) return -1
    return (instances[placement] as FMessageInstance[]).findIndex(
      (item) => item.id === id
    )
  }

  const getSiblingOffset = (
    placement: messagePlacementType,
    id: string,
    isNext: boolean
  ): number => {
    const idx: number = getInstanceIndex(placement, id)
    if (idx === -1) return 0
    const beforeInstance: FMessageInstance =
      (instances[placement] as FMessageInstance[])[
      isNext ? idx + 1 : idx - 1
      ] || null
    if (!beforeInstance) return 0
    return (beforeInstance.vm.exposeProxy as FMessageInstance).bottom
  }

  const removeInstance = (
    placement: messagePlacementType,
    id: string
  ): void => {
    const idx: number = getInstanceIndex(placement, id)
      ; (instances[placement] as FMessageInstance[]).splice(idx, 1)
  }

  const createInstance = (
    instance: FMessageInstance,
    placement: messagePlacementType
  ): FMessageInstance => {
    if (instances[placement]) {
      (instances[placement] as FMessageInstance[]).push(instance)
    } else {
      instances[placement] = [instance]
    }

    return instance
  }

  return {
    instances,
    getSiblingOffset,
    removeInstance,
    createInstance
  } as const
}
