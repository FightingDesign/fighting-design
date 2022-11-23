import type { PropType, ExtractPropTypes } from 'vue'
import type { CardShadowType } from './interface'

export const Props = {
  /**
   * 卡片标题
   */
  title: {
    type: String,
    default: (): null => null
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
    type: [String, Number] as PropType<string | number>,
    default: (): number => 20
  },
  /**
   * 阴影样式
   * 
   * @values never hover always
   * @defaultValue never
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
