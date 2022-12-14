import type { FightingSize } from '../../_interface'

export type { CheckboxGroupProps } from './props'

/**
 * 绑定值发生改变时触发的回调接口
 * 
 * @param val 最新值
 */
export type CheckboxGroupChange = (val: string[]) => void

/**
 * 注入的依赖项类型接口
 */
export interface CheckboxGroupInject {
  modelValue: string[]
  disabled: boolean
  vertical: boolean
  label: string
  border: boolean
  size: FightingSize
  columnGap: string | number
  rowGap: string | number
  onChange: CheckboxGroupChange
  setChange: (val: CheckboxGroupLabel) => void
}
