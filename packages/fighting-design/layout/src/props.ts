import type { PropType, ExtractPropTypes } from 'vue'
import type { LayoutDirection } from './interface'

export const Props = {
  /**
   * 排列方向
   * 
   * @values horizontal vertical
   */
  direction: {
    type: String as PropType<LayoutDirection>,
    default: (): null => null,
    validator: (val: LayoutDirection): boolean => {
      return (['horizontal', 'vertical'] as const).includes(val)
    }
  }
} as const

export type LayoutProps = ExtractPropTypes<typeof Props>
