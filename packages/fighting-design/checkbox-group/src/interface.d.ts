export type { CheckboxGroupProps } from './props'

/**
 * 绑定值发生改变时触发的回调接口
 */
export interface CheckboxGroupChange {
  (val: string[]): boolean
}

export interface CheckboxGroupInject {
  modelValue: string[]
  disabled: boolean
  vertical: boolean
  label: string
  border: boolean
  size: CheckboxGroupSize
  columnGap: string | number
  rowGap: string | number
  onChange: CheckboxGroupChange
  setChange(val: CheckboxGroupLabel): void
}
