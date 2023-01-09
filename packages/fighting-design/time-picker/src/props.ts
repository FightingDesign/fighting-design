import { setBooleanProp, setStringProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'

export const Props = {
  /** 绑定值当前的时间 */
  time: setStringProp(),
  /** 是否只读 */
  readonly: setBooleanProp(),
  /** 是否可清除 */
  clear: setBooleanProp()
} as const

export type TimePickerProps = ExtractPropTypes<typeof Props>
