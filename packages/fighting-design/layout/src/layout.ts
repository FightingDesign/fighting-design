import type { layoutDirectionType } from './interface'
import type { PropType } from 'vue'

export const Props = {
  direction: {
    type: String as PropType<layoutDirectionType>,
    default: (): layoutDirectionType => '',
    validator: (val: layoutDirectionType): boolean => {
      return (['horizontal', 'vertical', ''] as const).includes(val)
    }
  }
} as const
