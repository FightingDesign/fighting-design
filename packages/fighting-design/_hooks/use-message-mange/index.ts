import { reactive } from 'vue'
import { isArray } from '../../_utils'
import type {
  MessageInstances,
  UseMassageManageReturn,
  MessageInstance,
  MessagePlacement
} from './interface'

export * from './interface.d'

/** 创建弹出的消息体实例 */
export const useMassageManage = (): UseMassageManageReturn => {
  /** 组件实例对象 */
  const instances: MessageInstances = reactive({})

  /**
   * 通过方位与 id，获取目标实例
   *
   * @param placement 弹出位置
   * @param id id
   */
  const getInstanceIndex = (placement: MessagePlacement, id: string): number => {
    /** 如果组件实例对象中没有找到方位信息数组，则返回 -1 */
    if (!instances[placement] || !isArray(instances[placement])) return -1
    return (instances[placement] as MessageInstance[]).findIndex((item: MessageInstance): boolean => {
      return item.id === id
    })
  }

  const getSiblingOffset = (placement: MessagePlacement, id: string, isNext: boolean): number => {
    const idx: number = getInstanceIndex(placement, id)
    if (idx === -1) return 0
    const beforeInstance: MessageInstance | null = instances[placement] && (instances[placement] as MessageInstance[])[isNext ? idx + 1 : idx - 1] || null
    if (!beforeInstance) return 0

    /**
     * 在不同vue 版本的表现不同(vue版本取决于用户)
     *
     * vue > 3.2.36
     * exposeProxy: 响应式
     * exposed: 原始值
     *
     * vue < 3.2.36
     * exposeProxy: null
     * exposed: 响应式
     */
    return (beforeInstance.vm.exposeProxy || (beforeInstance.vm.exposed as MessageInstance)).bottom
  }

  /**
   * 移除实例对象
   *
   * @param placement 弹出位置
   * @param id 唯一值
   */
  const removeInstance = (placement: MessagePlacement, id: string): void => {
    const idx: number = getInstanceIndex(placement, id)
      ; (instances[placement] as MessageInstance[]).splice(idx, 1)
  }

  /**
   * 创建实例
   *
   * @param instance 组件实例
   * @param placement 弹出位置
   * @returns 组件实例
   */
  const createInstance = (instance: MessageInstance, placement: MessagePlacement): MessageInstance => {
    if (instances[placement]) {
      (instances[placement] as MessageInstance[]).push(instance)
    } else {
      instances[placement] = [instance]
    }
    return instance
  }

  return {
    getSiblingOffset,
    removeInstance,
    createInstance
  }
}
