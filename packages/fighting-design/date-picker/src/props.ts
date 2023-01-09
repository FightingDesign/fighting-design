import { setBooleanProp } from '../../_utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type { FightingSize } from '../../_interface'

export const Props = {
  /** 绑定值 */
  date: {
    type: String,
    default: (): null => null
  },
  /** 是否只读 */
  readonly: setBooleanProp(),
  /** 是否可清除 */
  clear: setBooleanProp(),
  /**
   * 尺寸
   *
   * @values large middle small mini
   * @defaultValue middle
   */
  size: {
    type: String as PropType<FightingSize>,
    default: (): FightingSize => 'middle',
    validator: (val: FightingSize): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  /** 时间格式 */
  format: {
    type: String,
    default: (): string => 'YYYY/MM/DD'
  }
} as const

export type DatePickerProps = ExtractPropTypes<typeof Props>
