import { setBooleanProp, setStringProp } from '../../_utils'
import type { PropType, ExtractPropTypes } from 'vue'
import type { FightingSize } from '../../_interface'

export const Props = {
  /** 是否竖直排列 */
  vertical: setBooleanProp(),
  /** 是否禁止换行 */
  nowrap: setBooleanProp(),
  /**
   * 间距尺寸
   *
   * @values large middle small mini
   * @defaultValue middle
   */
  spacing: {
    type: String as PropType<FightingSize>,
    default: (): null => null,
    validator: (val: FightingSize): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  /** 自定义纵向间距 */
  rowGap: setStringProp(),
  /** 自定义横向间距 */
  columnGap: setStringProp()
} as const

export type SpaceProps = ExtractPropTypes<typeof Props>
