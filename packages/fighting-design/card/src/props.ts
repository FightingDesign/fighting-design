import { setBooleanProp, setStringNumberProp, setStringProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { CardShadow } from './interface'

export const Props = {
  /** 卡片标题 */
  title: setStringProp(),
  /** 是否为圆角卡片 */
  round: setBooleanProp(),
  /** 卡片内边距 */
  padding: setStringNumberProp(),
  /**
   * 阴影样式
   *
   * @values hover always
   * @default null
   */
  shadow: setStringProp<CardShadow>(null, (val: CardShadow): boolean => {
    return (['hover', 'always'] as const).includes(val)
  })
} as const

export type CardProps = ExtractPropTypes<typeof Props>
