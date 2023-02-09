import { setBooleanProp, setStringProp, setNumberProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'

export const Props = {
  /** 绑定值 */
  modelValue: setNumberProp(0),
  /** 步长（注意和步数区别开来） */
  step: setNumberProp(1),
  /** 最小值 */
  min: setNumberProp(0),
  /** 最大值 */
  max: setNumberProp(100),
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /** 是否可范围性取值 */
  range: setBooleanProp(),
  /** 自定义滑块背景色 */
  bgColor: setStringProp()
} as const

export type SliderProps = ExtractPropTypes<typeof Props>
