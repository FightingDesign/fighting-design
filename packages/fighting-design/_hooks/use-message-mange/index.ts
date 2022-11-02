import { reactive } from 'vue'
import type {
  MessageInstancesType,
  UseMassageManageReturnInterface,
  MessageInstance,
  MessagePlacementType
} from './interface'

/**
 * 创建弹出的消息体实例
 * @returns
 */
// export const useMassageManage = <MessagePlacementType extends string>(): UseMassageManageReturnInterface => {
export const useMassageManage = (): UseMassageManageReturnInterface => {
  // 组件实例对象
  const instances: MessageInstancesType = reactive({})

  /**
   * 通过方位与 id，获取目标实例
   * @param placement 方位
   * @param id id
   * @returns 
   */
  const getInstanceIndex = (placement: MessagePlacementType, id: string): number => {
    if (!instances[placement]) return -1
    return (instances[placement] as MessageInstance[]).findIndex((item: MessageInstance) => {
      return item.id === id
    })
  }

  const getSiblingOffset = (placement: MessagePlacementType, id: string, isNext: boolean): number => {
    const idx: number = getInstanceIndex(placement, id)
    if (idx === -1) return 0
    const beforeInstance: MessageInstance =
      (instances[placement] as MessageInstance[])[
      isNext ? idx + 1 : idx - 1
      ] || null
    if (!beforeInstance) return 0

    /**
     * 在vue3.2.32版本进行了调整
     * 在之后版本使用 exposeProxy 代替 exposed
     * 其他用到 exposed 的地方需同步修改
     */
    return (beforeInstance.vm.exposed as MessageInstance).bottom
  }

  /**
   * 移除实例对象
   * @param placement 
   * @param id 
   */
  const removeInstance = (placement: MessagePlacementType, id: string): void => {
    const idx: number = getInstanceIndex(placement, id)
      ; (instances[placement] as MessageInstance[]).splice(idx, 1)
  }

  /**
   * 创建实例
   * @param instance 
   * @param placement 
   * @returns 
   */
  const createInstance = (instance: MessageInstance, placement: MessagePlacementType): MessageInstance => {
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
