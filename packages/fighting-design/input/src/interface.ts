export type { InputProps } from './props'

/** 不同类型 */
export type InputType = 'text' | 'password' | 'number'

/**
 * 当 input 改变时触发的回调函数类型
 *
 * @param { string } value 当前的值
 * @param { Object } evt 事件对象
 */
export type InputUpdate = (value: string, evt: Event) => void

/**
 * 当按下回车触发的函数类型
 *
 * @param { string } value 当前的值
 * @param { Object } evt 事件对象
 */
export type InputEnter = (value: string, evt: KeyboardEvent) => void
