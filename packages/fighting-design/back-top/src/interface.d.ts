export type { BackTopPropsType } from './props'

/**
 * 滚动模式
 * 
 * @see scrollTo https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollTo
 */
export type BackTopBehaviorType = 'smooth' | 'auto'

/**
 * 滚动状态监视指定元素
 * 
 * @param node 元素节点
 */
export interface BackTopHandleScrollInterface {
  (node: HTMLElement | null)
}
