export type { SwapPropsType } from './props'

/**
 * 不同切换类型
 */
export type SwapType = 'sound' | 'swap' | 'default'

/**
 * 切换时候执行的回调方法接口
 *
 * @param target 绑定的值
 */
export interface SwapOnChangeInterface {
  (target: boolean): void
}
