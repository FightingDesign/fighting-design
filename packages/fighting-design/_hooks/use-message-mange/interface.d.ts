import type { MessagePlacement } from '../../message/src/interface'
import type { MessageInstance } from '../use-message/interface'

export type { MessageInstance } from '../use-message/interface'
export type { MessagePlacement, MessagePlacement } from '../../message/src/interface'

/**
 * 组件实例集合类型
 * 
 * 由方位信息作为键，实例数组集合为值的对象类型
 */
export type MessageInstances = Partial<{
  [key in MessagePlacement]: MessageInstance[]
}>

/**
 * useMassageManage 返回值类型接口
 * 
 * @param getSiblingOffset 通过方位与 id，获取目标实例
 * @param removeInstance 移除实例对象
 * @param createInstance 创建实例
 */
export interface UseMassageManageReturn {
  getSiblingOffset: (placement: MessagePlacement, id: string, isNext: boolean) => ComputedRef<number>
  removeInstance: (placement: MessagePlacement, id: string) => void
  createInstance: (instance: MessageInstance, placement: MessagePlacement) => MessageInstance
}
