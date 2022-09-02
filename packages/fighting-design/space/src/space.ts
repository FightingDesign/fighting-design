import type { PropType, ExtractPropTypes } from 'vue'
import type { spaceSize } from './interface'

export const Props = {
  vertical: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  wrap: {
    type: Boolean as PropType<boolean>,
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
    type: String as PropType<string>,
    default: (): string => ''
  },
  columnGap: {
    type: String as PropType<string>,
    default: (): string => ''
  }
} as const

export type FPropsType = ExtractPropTypes<typeof Props>
