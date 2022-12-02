export type { CheckboxGroupPropsType } from './props'

/**
 * 绑定值类型
 *
 * 绑定值可能是 string、number、boolean
 */
export type CheckboxGroupLabelType =
  | string
  | number
  | boolean
  | string[]
  | number[]
  | boolean[]

/**
 * 不同尺寸类型
 */
export type CheckboxGroupSizeType = 'large' | 'middle' | 'small' | 'mini'

/**
 * 绑定值发生改变时触发的回调接口
 */
export interface CheckboxGroupChangeInterface {
  (val: CheckboxGroupLabelType): boolean
}
