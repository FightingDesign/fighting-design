import { setBooleanProp, setStringProp } from '../../_utils'
import { FIGHTING_SIZE } from '../../_tokens'
import type { ExtractPropTypes } from 'vue'
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
   */
  spacing: setStringProp<FightingSize>(undefined, (val: FightingSize): boolean => {
    return FIGHTING_SIZE.includes(val)
  }),
  /** 自定义纵向间距 */
  rowGap: setStringProp(),
  /** 自定义横向间距 */
  columnGap: setStringProp()
} as const

/** space 组件 props 类型 */
export type SpaceProps = ExtractPropTypes<typeof Props>
