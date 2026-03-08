import type { ExtractPropTypes } from 'vue'
import { setBooleanProp, setStringProp } from '../../_utils'
    
export const Props = {
  /** 当前颜色值 */
  modelValue: setStringProp(),
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /** 尺寸 */
  size: setStringProp('small'),
  /** 是否显示透明度 */
  showAlpha: setBooleanProp(false)
} as const

/** color-picker 组件 props 类型 */
export type ColorPickerProps = ExtractPropTypes<typeof Props>
