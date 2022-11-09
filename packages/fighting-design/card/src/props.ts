import type { PropType, ExtractPropTypes } from 'vue'
import type { CardShadowType } from './interface'

export const Props = {
  /**
   * 卡片标题
   */
  title: {
    type: String,
    default: (): string => ''
  },
  /**
   * 是否为圆角卡片
   */
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 卡片内边距
   */
  padding: {
    type: String,
    default: (): string => '20px'
  },
  /**
   * 阴影样式
   */
  shadow: {
    type: String as PropType<CardShadowType>,
    default: (): CardShadowType => 'never',
    validator: (val: CardShadowType): boolean => {
      return (['never', 'hover', 'always'] as const).includes(val)
    }
  }
} as const

export type CardPropsType = ExtractPropTypes<typeof Props>
