export type { BackTopPropsType } from './props'

/**
 * 滚动模式
 */
export type BackTopBehaviorType = 'smooth' | 'auto'

/**
 * 滚动状态监视指定元素
 */
export interface BackTopHandleScrollInterface {
  (node: HTMLElement | null)
}
