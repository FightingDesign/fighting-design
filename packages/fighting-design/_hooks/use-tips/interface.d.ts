import type { ComponentInternalInstance } from 'vue'
import type { MessageProps } from '../../message'
import type { FightingType } from '../../_interface'

type InstanceOptions<T> = Partial<Mutable<T>> & {
  onDestroy?: () => void
}

export interface MessageFn {
  (options: MessageOptions | string): MessageInstance
}

export type MessageFnWith = {
  [key in FightingType]: (text: string) => MessageInstance
}

/** 参数列表，也就是 props 参数列表类型 */
export type MessageOptions = InstanceOptions<MessageProps>
// export type MessageOptions = MessageProps

export interface MessageInstance {
  visible: number
  bottom: number
  id: string
  vm: ComponentInternalInstance
  close: () => void
}

/**
 * useMessage 返回值类型接口
 * 
 * @param instance 组件实例
 */
export interface UseMessageReturn {
  instance: MessageFn & MessageFnWithType
}

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
  instance: MessageFn & Partial<MessageFnWith>
}
