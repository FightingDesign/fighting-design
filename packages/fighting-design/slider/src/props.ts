import {
  setBooleanProp,
  setStringProp,
  setNumberProp,
  setStringNumberProp
} from '../../_utils'
import type { ExtractPropTypes } from 'vue'

export const Props = {
  /** 绑定值 */
  modelValue: setNumberProp(0),
  /** 步长 */
  step: setNumberProp(1),
  /** 最小值 */
  min: setNumberProp(0),
  /** 最大值 */
  max: setNumberProp(100),
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /** 自定义滑块背景色 */
  background: setStringProp(),
  /** 自定义选中和小球的颜色 */
  activeColor: setStringProp(),
  /** 自定义宽度 */
  width: setStringNumberProp()
} as const

/** slider 组件 props 类型 */
export type SliderProps = ExtractPropTypes<typeof Props>
