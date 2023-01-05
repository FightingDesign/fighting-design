import type { FightingSize } from '../../_interface'

export type { RadioGroundProps } from './props'

/** 绑定值类型接口 */
export type RadioModelValue = string | number | boolean

/**
 * 改变时触发的回调类型接口
 *
 * @param value 改变的值
 */
export type RadioChange = (value: RadioModelValue) => void

/**
 * 注入的依赖项类型接口
 */
export interface RadioGroundInject {
  disabled: boolean
  modelValue: RadioModelValue
  label: string
  vertical: boolean
  size: FightingSize
  columnGap: string | number
  rowGap: string | number
  border: boolean
  circle: boolean
  change: RadioChange
  changeEvent: (value: RadioModelValue) => void
}
