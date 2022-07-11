import type { PropType } from 'vue'
import type {
  // spacePosition,
  spaceSize
} from './interface'

export const Props = {
  // position: {
  //   type: String as PropType<spacePosition>,
  //   default: (): spacePosition => 'center',
  //   validator: (value: spacePosition): boolean => {
  //     return (['start', 'center', 'end', 'baseline'] as const).includes(value)
  //   }
  // },
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
