import type { PropType, ExtractPropTypes } from 'vue'
import type { SpaceSizeType } from './interface'

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
    type: String as PropType<SpaceSizeType>,
    default: (): SpaceSizeType => 'middle',
    validator: (val: SpaceSizeType): boolean => {
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

export type SpacePropsType = ExtractPropTypes<typeof Props>
