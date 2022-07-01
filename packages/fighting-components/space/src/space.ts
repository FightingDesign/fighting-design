import type { CSSProperties, PropType } from 'vue'
import type { spacePosition, spaceSize } from './interface'

export const Props = {
  position: {
    type: String as PropType<spacePosition>,
    default: (): spacePosition => 'center',
    validator: (value: spacePosition): boolean => {
      return (['start', 'center', 'end', 'baseline'] as const).includes(value)
    }
  },
  vertical: {
    type: Boolean,
    default: (): boolean => false
  },
  wrap: {
    type: Boolean,
    default: (): boolean => false
  },
  spacing: {
    type: [String, Number, Array<string | number>] as PropType<spaceSize>,
    default: (): string => 'small'
  },
  className: {
    type: String,
    default: (): string => ''
  },
  style: {
    type: Object as PropType<CSSProperties>,
    default: (): CSSProperties => ({})
  }
} as const


// export enum spacingType {
//   SPACING_LARGE = 'large',
//   SPACING_MIDDLE = 'middle',
//   SPACING_SMALL = 'small'
// }
