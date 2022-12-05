export type { CheckboxProps } from './props'

export type CheckboxLabel = string | number | boolean

/**
 * 绑定值发生改变时触发的回调接口
 *
 * @param val 最新值
 */
export interface CheckboxChangeInterface {
  (val: CheckboxLabelType): CheckboxLabelType | []
}
