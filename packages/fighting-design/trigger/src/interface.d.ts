export type { TriggerPropsType } from './trigger'

/**
 * 触发方式类型
 */
export type TriggerTriggerType = 'hover' | 'click'

/**
 * 回调函数类型接口
 * 
 * @param target 当前展示状态
 */
export interface TriggerEmitsInterface {
  (target: boolean): void
}
