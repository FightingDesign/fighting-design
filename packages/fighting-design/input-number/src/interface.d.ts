export type { InputNumberPropsType } from './props'

export type InputNumberSizeType = 'large' | 'middle' | 'small' | 'mini'

export type InputNumberModelType = 'default' | 'button' | 'switch'

/**
 * 当 input 改变时触发的回调函数类型接口
 */
export interface InputNumberChangeInterface {
  (val: string): void
}
