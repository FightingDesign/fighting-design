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
 * @param visible 是否展示
 * @param bottom 底部偏移量
 * @param id 唯一值
 * @param vm 组件组件内部实例
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

/**
 * renderInstance 方法状态
 *
 * @param options 传入选项参数或者字符串
 */
type RenderInstanceFn = (options: TipsOptions | string) => TipsInstance

/**
 * renderInstance 方法状态
 *
 * @param text 提示信息
 */
type RenderInstanceFnWith = Partial<{
  [key in FightingType]: (text: string) => TipsInstance
}>

/**
 * renderInstance 方法类型
 *
 * 具有两种状态
 */
export type RenderInstance = RenderInstanceFn & RenderInstanceFnWith

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
  renderInstance: RenderInstance
}
