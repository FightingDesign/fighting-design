import type { PropType } from 'vue'
import type { positionType } from './interface'

export const Props = {
  content: {
    type: String,
    default: (): string => ''
  },
  position: {
    type: String as PropType<positionType>,
    default: (): positionType => 'bottom',
    validator: (val: positionType): boolean => {
      return (['top', 'bottom', 'right', 'left'] as const).includes(val)
    }
  },
  background: {
    type: String,
    default: (): string => ''
  },
  color: {
    type: String,
    default: (): string => ''
  }
} as const
