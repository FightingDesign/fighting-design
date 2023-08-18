import type { ExtractPropTypes } from 'vue'
import { setBooleanProp, setFunctionProp, setStringProp } from '../../_utils'
import type { FightingSize, FightingType } from '../../_interface'
import { FIGHTING_SIZE, FIGHTING_TYPE } from '../../_tokens'

export const Props = {
  /** 是否选中 */
  checked: setBooleanProp(false),
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
  type: setStringProp<FightingType>('primary', (val: FightingType): boolean => {
    return FIGHTING_TYPE.includes(val)
  }),
  /**点击 Check Tag 时触发的事件*/
  onChange: setFunctionProp<(value: boolean) => void>()
} as const

export type CheckTagProps = ExtractPropTypes<typeof Props>
