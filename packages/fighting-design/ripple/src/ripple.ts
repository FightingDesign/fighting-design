import type { PropType } from 'vue'
import type { rippleType } from './interface'

export const Props = {
  ripplesColor: {
    type: String,
    default: (): string => ''
  },
  duration: {
    type: Number,
    default: (): number => 400
  },
  type: {
    type: String as PropType<rippleType>,
    default: (): rippleType => 'default',
    validator: (val: rippleType): boolean => {
      return (
        ['default', 'primary', 'success', 'danger', 'warning'] as const
      ).includes(val)
    }
  },
  disabled: {
    type: Boolean,
    default: (): boolean => false
  }
} as const
