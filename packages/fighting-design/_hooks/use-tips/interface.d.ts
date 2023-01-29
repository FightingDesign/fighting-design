import type { ComponentInternalInstance } from 'vue'
import type { MessageProps } from '../../message'
import type { FightingType } from '../../_interface'

/** 参数列表，也就是 props 参数列表类型 */
export type TipsOptions = Partial<Mutable<MessageProps>> & {
  onDestroy?: () => void
}

/**
 * 组件实例
 * 
 * @param visible
 * @param bottom
 * @param id
 * @param vm
 * @param close 关闭之后的回调
 */
export interface TipsInstance {
  visible: number
  bottom: number
  id: string
  vm: ComponentInternalInstance
  close: () => void
}

/**
 * 组件实例集合类型
 * 
 * 由方位信息作为键，实例数组集合为值的对象类型
 */
export type TipsInstances = Partial<{
  [key in MessagePlacement]: TipsInstance[]
}>

export interface TipsFn {
  (options: TipsOptions | string): TipsInstance
}

export type TipsFnWith = {
  [key in FightingType]: (text: string) => TipsInstance
}

/**
 * useMassageManage 返回值类型接口
 * 
 * @param getSiblingOffset 通过方位与 id，获取目标实例
 * @param removeInstance 移除实例对象
 * @param createInstance 创建实例
 * @param renderInstance 创建组件实例
 */
export interface UseTipsReturn {
  getSiblingOffset: (placement: MessagePlacement, id: string, isNext: boolean) => ComputedRef<number>
  removeInstance: (placement: MessagePlacement, id: string) => void
  createInstance: (instance: TipsInstance, placement: MessagePlacement) => TipsInstance
  renderInstance: TipsFnFn & Partial<TipsFnFnWith>
}
