import type { PropType, ExtractPropTypes } from 'vue'
import type { ButtonGroupSizeType } from './interface'

export const Props = {
  size: {
    type: String as PropType<ButtonGroupSizeType>,
    default: (): ButtonGroupSizeType => 'middle',
    validator: (val: ButtonGroupSizeType): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  vertical: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export type ButtonGroupPropsType = ExtractPropTypes<typeof Props>
