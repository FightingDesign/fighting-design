export type { TextareaProps } from './textarea'

/**
 * 当 textarea 改变时触发的回调函数类型接口
 *
 * @param val 最新值
 */
export interface TextareaChangeInterface {
  (val: string): void
}

/**
 * 拉伸方式类型
 */
export type TextareaResizeType = 'none' | 'both' | 'horizontal' | 'vertical'
