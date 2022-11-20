import type { PropType, ExtractPropTypes, InjectionKey } from 'vue'
import type { ButtonSizeType } from '../../button'

export const Props = {
  /**
   * 按钮尺寸
   */
  size: {
    type: String as PropType<ButtonSizeType>,
    default: (): ButtonSizeType => 'middle',
    validator: (val: ButtonSizeType): boolean => {
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

export const BUTTON_GROUP_PROPS_KEY: InjectionKey<ButtonGroupPropsType> =
  Symbol('button-group-props-key')
