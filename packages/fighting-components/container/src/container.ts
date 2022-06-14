import { orientationType } from './interface'
import { PropType } from 'vue'

export const Props = {
  orientation: {
    type: String as PropType<orientationType>,
    default: (): orientationType => 'horizontal',
    validator: (val: orientationType): boolean => {
      return (['horizontal', 'vertical'] as const).includes(val)
    }
  }
} as const
