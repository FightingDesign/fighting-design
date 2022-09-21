import type { PropType } from 'vue'
import type { spaceSizeType } from './interface'

export const Props = {
  vertical: {
    type: Boolean,
    default: (): boolean => false
  },
  wrap: {
    type: Boolean,
    default: (): boolean => true
  },
  spacing: {
    type: String as PropType<spaceSizeType>,
    default: (): spaceSizeType => 'middle',
    validator: (val: spaceSizeType): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  rowGap: {
    type: String,
    default: (): string => ''
  },
  columnGap: {
    type: String,
    default: (): string => ''
  }
} as const
