import { setBooleanProp, setStringProp } from '../../_utils'
import { FIGHTING_SIZE } from '../../_tokens'
import type { ExtractPropTypes } from 'vue'
import type { FightingSize } from '../../_interface'

export const Props = {
  /** 绑定值 */
  date: setStringProp(),
  /** 是否只读 */
  readonly: setBooleanProp(),
  /** 是否可清除 */
  clear: setBooleanProp(),
  /**
   * 尺寸
   *
   * @values large middle small mini
   * @default middle
   */
  size: setStringProp<FightingSize>('middle', (val: FightingSize): boolean => {
    return FIGHTING_SIZE.includes(val)
  }),
  /** 时间格式 */
  format: setStringProp<string>('YYYY/MM/DD')
} as const

export type DatePickerProps = ExtractPropTypes<typeof Props>
