export type { SwitchPropsType } from './props'

/**
 * 不同尺寸类型
 */
export type SwitchSizeType = 'large' | 'middle' | 'small' | 'mini'

/**
 * 切换时候执行的回调方法类型接口
 */
export interface SwitchChangeInterface {
  (target: boolean): void
}
