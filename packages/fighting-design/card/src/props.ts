import { setBooleanProp } from '../../_utils'
import type { PropType, ExtractPropTypes } from 'vue'
import type { CardShadow } from './interface'

export const Props = {
  /** 卡片标题 */
  title: setStringProp(),
  /** 是否为圆角卡片 */
  round: setBooleanProp(),
  /** 卡片内边距 */
  padding: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * 阴影样式
   *
   * @values hover always
   */
  shadow: {
    type: String as PropType<CardShadow>,
    default: (): null => null,
    validator: (val: CardShadow): boolean => {
      return (['hover', 'always'] as const).includes(val)
    }
  }
} as const

export type CardProps = ExtractPropTypes<typeof Props>
