import { directionType } from './interface'
import { PropType } from 'vue'

export const Props = {
  direction: {
    type: String as PropType<directionType>,
    default: (): directionType => '',
    validator: (val: directionType): boolean => {
      return (['horizontal', 'vertical', ''] as const).includes(val)
    }
  }
} as const
