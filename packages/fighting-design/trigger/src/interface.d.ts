import type { OrdinaryFunctionInterface } from '../../_interface'

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

/**
 * 注入的依赖项对象类型接口
 * 
 * @param handelClose 关闭方法
 */
export interface TriggerProvideInterface {
  handelClose: OrdinaryFunctionInterface
}
