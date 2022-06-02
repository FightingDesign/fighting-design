import type { cardShadow } from '@fighting-design/fighting-type'
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
  target: {
    type: String as PropType<cardShadow>,
    default: (): string => 'always',
    validator(val: string): boolean {
      return ['never', 'hover', 'always'].includes(val)
    }
  }
} as const
