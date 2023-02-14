import { setBooleanProp, setStringProp } from '../../_utils'
import { FIGHTING_SIZE } from '../../_tokens'
import type { ExtractPropTypes } from 'vue'
import type { FightingSize } from '../../_interface'

export const Props = {
  /** 绑定值当前的时间 */
  time: setStringProp(),
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /** 是否可清除 */
  clear: setBooleanProp(),
  /** 占位符 */
  placeholder: setStringProp(),
  /**
   * 尺寸
   *
   * @values large middle small mini
   * @default middle
   */
  size: setStringProp<FightingSize>('middle', (val: FightingSize): boolean => {
    return FIGHTING_SIZE.includes(val)
  })
} as const

/** time-picker 组件 props 类型 */
export type TimePickerProps = ExtractPropTypes<typeof Props>
