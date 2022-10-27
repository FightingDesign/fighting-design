import type { PropType } from 'vue'
import type { LayoutDirectionType } from './interface'

export const Props = {
  direction: {
    type: String as PropType<LayoutDirectionType>,
    default: (): LayoutDirectionType => '',
    validator: (val: LayoutDirectionType): boolean => {
      return (['horizontal', 'vertical', ''] as const).includes(val)
    }
  }
} as const
