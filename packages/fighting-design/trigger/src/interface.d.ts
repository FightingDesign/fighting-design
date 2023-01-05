export type { TriggerProps } from './trigger'

/** 触发方式类型 */
export type TriggerTrigger = 'hover' | 'click'

/**
 * 注入的依赖项对象类型接口
 *
 * @param handelClose 关闭方法
 */
export interface TriggerProvide {
  handelClose: () => void
}
