import type { PropType, ExtractPropTypes } from 'vue'
import type { spaceSize } from './interface'

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
    type: String as PropType<spaceSize>,
    default: (): spaceSize => 'middle',
    validator: (val: spaceSize): boolean => {
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

export type FPropsType = ExtractPropTypes<typeof Props>
