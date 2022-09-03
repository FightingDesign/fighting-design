import type { cardShadow } from './interface'
import type { PropType, ExtractPropTypes } from 'vue'

export const Props = {
  title: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  round: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  padding: {
    type: String as PropType<string>,
    default: (): string => '20px'
  },
  shadow: {
    type: String as PropType<cardShadow>,
    default: (): cardShadow => 'never',
    validator: (val: cardShadow): boolean => {
      return (['never', 'hover', 'always'] as const).includes(val)
    }
  }
} as const

export type FPropsType = ExtractPropTypes<typeof Props>
