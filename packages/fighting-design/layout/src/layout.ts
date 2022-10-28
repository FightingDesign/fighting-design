import type { PropType, ExtractPropTypes } from 'vue'
import type { LayoutDirectionType } from './interface'

export const Props = {
  direction: {
    type: String as PropType<LayoutDirectionType>,
    default: (): LayoutDirectionType => '',
    validator: (val: LayoutDirectionType): boolean => {
      return (['horizontal', 'vertical', ''] as const).includes(val)
    }
  }
} as const

export type LayoutPropsType = ExtractPropTypes<typeof Props>
