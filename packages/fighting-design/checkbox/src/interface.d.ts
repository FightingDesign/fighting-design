export type { CheckboxPropsType } from './props'

export type CheckboxLabelType = string | number | boolean

/**
 * 绑定值发生改变时触发的回调接口
 */
export interface CheckboxChangeInterface {
  (val: CheckboxLabelType): CheckboxLabelType | []
}
