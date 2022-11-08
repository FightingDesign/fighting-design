export type { InputPropsType } from './props'

export type InputType = 'text' | 'password'

export type InputSizeType = 'large' | 'middle' | 'small' | 'mini'

/**
 * 当 input 改变时触发的回调函数类型接口
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

/**
 * 点击 input 查看密码按钮时的函数类型接口
 */
export interface InputHandleShowPasswordInterface {
  (target: 'down' | 'up'): void
}
