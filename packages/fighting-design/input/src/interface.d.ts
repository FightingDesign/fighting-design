export type { InputProps } from './props'

/**
 * 不同类型
 */
export type InputType = 'text' | 'password' | 'number'

/**
 * 当 input 改变时触发的回调函数类型接口
 *
 * @param value 当前的值
 */
export type InputChange = (value: string) => void

/**
 * 当点击 input 搜索按钮时触发的回调函数类型接口
 */
export type InputSearch = ({ evt: Event, value: string }) => void
