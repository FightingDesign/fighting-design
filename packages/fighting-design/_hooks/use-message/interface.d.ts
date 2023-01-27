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
