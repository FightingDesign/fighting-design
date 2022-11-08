export type { SwitchPropsType } from './props'

export type SwitchSizeType = 'large' | 'middle' | 'small'

/**
 * 切换时候执行的回调方法接口
 */
export interface SwitchChangeInterface {
  (target: boolean): void
}
