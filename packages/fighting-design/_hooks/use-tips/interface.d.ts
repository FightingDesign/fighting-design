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
 * @param { number } visible 是否展示
 * @param { number } bottom 底部偏移量
 * @param { string } id 唯一值
 * @param { Object } vm 组件组件内部实例
 * @param { Function } close 关闭之后的回调
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
 * @param { Object | string } options 传入选项参数或者字符串
 */
interface RenderInstanceFn {
  (options: TipsOptions | string): TipsInstance
}

/**
 * renderInstance 方法状态
 *
 * @param { string } text 提示信息
 */
type RenderInstanceFnWith = {
  // [key in FightingType]: (text: string) => TipsInstance
  [key in FightingType]: (text: string) => void
}

/**
 * renderInstance 方法类型
 *
 * 具有两种状态
 */
export type RenderInstance = RenderInstanceFn & Partial<RenderInstanceFnWith>

/**
 * useMassageManage 返回值类型接口
 *
 * @param { Function } getSiblingOffset 通过方位与 id，获取目标实例
 * @param { Function } removeInstance 移除实例对象
 * @param { Function } createInstance 创建实例
 * @param { Function } renderInstance 创建组件实例
 */
export interface UseTipsReturn {
  getSiblingOffset: (placement: MessagePlacement, id: string, isNext: boolean) => ComputedRef<number>
  removeInstance: (placement: MessagePlacement, id: string) => void
  createInstance: (instance: TipsInstance, placement: MessagePlacement) => TipsInstance
  renderInstance: RenderInstance
}
