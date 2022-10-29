import type { PropType, ExtractPropTypes } from 'vue'
import type { CardShadowType } from './interface'

export const Props = {
  title: {
    type: String,
    default: (): string => ''
  },
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  padding: {
    type: String,
    default: (): string => '20px'
  },
  shadow: {
    type: String as PropType<CardShadowType>,
    default: (): CardShadowType => 'never',
    validator: (val: CardShadowType): boolean => {
      return (['never', 'hover', 'always'] as const).includes(val)
    }
  }
} as const

export type CardPropsType = ExtractPropTypes<typeof Props>
