import type { ExtractPropTypes } from 'vue'
import { setBooleanProp, setStringProp } from '../../_utils'
import type { FightingSize, FightingType } from '../../_interface'
import { FIGHTING_SIZE, FIGHTING_TYPE } from '../../_tokens'

export const Props = {
  /** 是否选中 */
  checked: setBooleanProp(true),
  /**
   * 尺寸
   *
   * @values large middle small mini
   */
  size: setStringProp<FightingSize>(undefined, (val: FightingSize): boolean => {
    return FIGHTING_SIZE.includes(val)
  }),
  /**
   * 标签类型
   *
   * @values default primary success danger warning info
   */
  type: setStringProp<FightingType>(undefined, (val: FightingType): boolean => {
    return FIGHTING_TYPE.includes(val)
  })
} as const

export type CheckTagProps = ExtractPropTypes<typeof Props>
