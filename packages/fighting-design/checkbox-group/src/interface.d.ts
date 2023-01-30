import type { FightingSize } from '../../_interface'

export type { CheckboxGroupProps } from './props'

/**
 * 绑定值发生改变时触发的回调接口
 *
 * @param { string[] } val 最新值
 */
export type CheckboxGroupChange = (val: string[]) => void

/**
 * 注入的依赖项类型接口
 *
 * @param { string[] } modelValue 绑定值
 * @param { boolean } disabled 是否禁用
 * @param { boolean } vertical 是否纵向排列
 * @param { string } label label
 * @param { boolean } border 是否显示边框
 * @param { string } size 尺寸
 * @param { string | number } columnGap 横向排列的间距
 * @param { string | number } rowGap 纵向排列的间距
 * @param { Function } onChange 绑定值变化时触发
 * @param { Function } setChange 绑定值发生改变时候触
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
