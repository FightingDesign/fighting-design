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

export type CheckboxGroupSizeType = 'large' | 'middle' | 'small' | 'mini'

/**
 * 绑定值发生改变时候触发的函数接口
 */
export interface CheckboxGroupChangeEventInterface {
  (val: CheckboxGroupLabelType): void
}

/**
 * 绑定值发生改变时触发的回调接口
 */
export interface CheckboxGroupChangeInterface {
  (val: CheckboxGroupLabelType): boolean
}

/**
 * 父组件 checkbox-group 注入给自组件的依赖类型
 *
 * 除了 props 还有 changeEvent 用检测来绑定值发生改变时候触的函数
 */
export type CheckboxGroupInjectPropsType = CheckboxGroupPropsType & {
  changeEvent: CheckboxGroupChangeEventInterface
}
