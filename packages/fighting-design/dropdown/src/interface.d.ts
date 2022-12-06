export type { DropdownProps } from './dropdown'

/**
 * 触发方式类型
 */
export type DropdownTrigger = 'hover' | 'click'

/**
 * 回调函数类型接口
 *
 * @param target 当前展示状态
 */
export interface DropdownEmitsInterface {
  (target: boolean): void
}
