export type { SwitchProps } from './props'

/**
 * 切换时候执行的回调方法类型接口
 */
export interface SwitchChangeInterface {
  (target: boolean): void
}
