import { setBooleanProp, setStringProp, setNumberProp } from '../../_utils'
import type { PropType, ExtractPropTypes } from 'vue'
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
   * @defaultValue default
   */
  type: {
    type: String as PropType<FightingType>,
    default: (): null => null,
    validator: (val: FightingType): boolean => {
      return (['default', 'primary', 'success', 'danger', 'warning'] as const).includes(val)
    }
  },
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /** 涟漪动画开始的透明度 */
  startOpacity: setNumberProp(),
  /** 涟漪动画结束的透明度 */
  endOpacity: setNumberProp()
} as const

export type RippleProps = ExtractPropTypes<typeof Props>
