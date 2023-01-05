import type { FightingSize } from '../../_interface'

export type { CheckboxGroupProps } from './props'

/**
 * 绑定值发生改变时触发的回调接口
 * @param val 最新值
 */
export type CheckboxGroupChange = (val: string[]) => void

/**
 * 注入的依赖项类型接口
 *
 * @param modelValue 绑定值
 * @param disabled 是否禁用
 * @param vertical 是否纵向排列
 * @param label label
 * @param border 是否显示边框
 * @param size 尺寸
 * @param columnGap 横向排列的间距
 * @param rowGap 纵向排列的间距
 * @param onChange 绑定值变化时触发
 * @param setChange 绑定值发生改变时候触
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
