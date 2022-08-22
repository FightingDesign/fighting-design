import type { directionType } from './interface'
import type { PropType, ExtractPropTypes } from 'vue'

export const Props = {
  direction: {
    type: String as PropType<directionType>,
    default: (): directionType => '',
    validator: (val: directionType): boolean => {
      return (['horizontal', 'vertical', ''] as const).includes(val)
    }
  }
} as const

export type FPropsType = ExtractPropTypes<typeof Props>
