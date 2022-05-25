import type { PropType } from 'vue'
import type { buttonGroupSize } from '@fighting-design/fighting-type'

export const Props = {
  size: {
    type: String as PropType<buttonGroupSize>,
    default: (): string => 'middle',
    validator(val: string): boolean {
      return ['large', 'middle', 'small', 'mini', ''].includes(val)
    }
  },
  vertical: {
    type: Boolean,
    default: (): boolean => false
  }
} as const
