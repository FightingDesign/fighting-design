export type { TriggerProps } from './props'

/** 触发方式类型 */
export type TriggerTrigger = 'hover' | 'click'

/**
 * 注入的依赖项对象类型接口
 *
 * @param { Function } handelClose 关闭方法
 */
export interface TriggerProvide {
  handelClose: () => void
}
