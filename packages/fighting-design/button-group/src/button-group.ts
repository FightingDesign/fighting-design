import type { PropType } from 'vue'
import type { buttonGroupSize } from './interface'

export const Props = {
  size: {
    type: String as PropType<buttonGroupSize>,
    default: (): buttonGroupSize => 'middle',
    validator: (val: buttonGroupSize): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  vertical: {
    type: Boolean,
    default: (): boolean => false
  }
} as const
