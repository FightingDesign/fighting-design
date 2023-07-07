import { setBooleanProp, setStringProp, setNumberProp } from '../../_utils'
import { FIGHTING_TYPE } from '../../_tokens'
import type { ExtractPropTypes } from 'vue'
import type { FightingType } from '../../_interface'

export const Props = {
  /** 自定义涟漪颜色 */
  ripplesColor: setStringProp(),
  /** 移除涟漪节点的时间 */
  duration: setNumberProp(400),
  /**
   * 涟漪类型
   *
   * @values default primary success danger warning
   */
  type: setStringProp<FightingType>(undefined, (val: FightingType): boolean => {
    return FIGHTING_TYPE.includes(val)
  }),
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /** 涟漪动画开始的透明度 */
  startOpacity: setNumberProp(),
  /** 涟漪动画结束的透明度 */
  endOpacity: setNumberProp()
} as const

/** ripple 组件 props 类型 */
export type RippleProps = ExtractPropTypes<typeof Props>
