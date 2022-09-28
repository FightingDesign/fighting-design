import { reactive } from 'vue'
import type { MessageInstance, UseMassageManageReturnInterface } from '../../_interface'

/**
 * 创建弹出的消息体实例
 * @returns
 */
export const useMassageManage = <messagePlacementType extends string>(): UseMassageManageReturnInterface => {
  const instances: Partial<{
    [key in messagePlacementType]: MessageInstance[]
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
    return (instances[placement] as MessageInstance[]).findIndex(
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
    const beforeInstance: MessageInstance =
      (instances[placement] as MessageInstance[])[
      isNext ? idx + 1 : idx - 1
      ] || null
    if (!beforeInstance) return 0
    return (beforeInstance.vm.exposeProxy as MessageInstance).bottom
  }

  const removeInstance = (
    placement: messagePlacementType,
    id: string
  ): void => {
    const idx: number = getInstanceIndex(placement, id)
      ; (instances[placement] as MessageInstance[]).splice(idx, 1)
  }

  const createInstance = (
    instance: MessageInstance,
    placement: messagePlacementType
  ): MessageInstance => {
    if (instances[placement]) {
      (instances[placement] as MessageInstance[]).push(instance)
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
