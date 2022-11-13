import type { PropType, ExtractPropTypes } from 'vue'
import type { ButtonGroupSizeType } from './interface'

export const Props = {
  /**
   * 按钮尺寸
   */
  size: {
    type: String as PropType<ButtonGroupSizeType>,
    default: (): ButtonGroupSizeType => 'middle',
    validator: (val: ButtonGroupSizeType): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  /**
   * 是否纵向排列
   */
  vertical: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export type ButtonGroupPropsType = ExtractPropTypes<typeof Props>
