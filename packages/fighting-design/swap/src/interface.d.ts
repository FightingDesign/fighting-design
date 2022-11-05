export type { SwapPropsType } from './props'

export type SwapType = 'sound' | 'swap' | 'default'

/**
 * 切换时候执行的回调方法接口
 */
export interface SwapOnChangeInterface {
  (target: boolean): void
}
