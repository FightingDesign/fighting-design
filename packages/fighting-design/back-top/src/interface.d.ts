export type { BackTopPropsType } from './props'

export type BackTopBehaviorType = 'smooth' | 'auto'

/**
 * 滚动状态监视指定元素
 */
export interface BackTopHandleScrollInterface {
  (node: HTMLElement | null)
}
