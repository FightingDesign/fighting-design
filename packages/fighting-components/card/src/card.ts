import type { cardShadow } from './interface'
import type { PropType } from 'vue'

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
    type: String as PropType<cardShadow>,
    default: (): cardShadow => 'always',
    validator: (val: cardShadow): boolean => {
      return (['never', 'hover', 'always'] as const).includes(val)
    }
  }
} as const
