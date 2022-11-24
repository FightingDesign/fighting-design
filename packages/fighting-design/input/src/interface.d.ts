export type { InputPropsType } from './props'

/**
 * 不同类型
 */
export type InputType = 'text' | 'password' | 'number'

/**
 * 不同尺寸类型
 */
export type InputSizeType = 'large' | 'middle' | 'small' | 'mini'

/**
 * 当 input 改变时触发的回调函数类型接口
 *
 * @param var 当前的值
 */
export interface InputChangeInterface {
  (val: string): void
}

/**
 * 当点击 input 搜索按钮时触发的回调函数类型接口
 */
export interface InputSearchInterface {
  ({ evt: Event, value: string }): void
}
