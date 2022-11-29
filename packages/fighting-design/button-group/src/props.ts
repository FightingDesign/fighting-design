import type { PropType, ExtractPropTypes, InjectionKey } from 'vue'
import type { ButtonSizeType } from '../../button'
import type { ButtonGroupDirectionType } from './interface'

export const Props = {
  /**
   * 按钮尺寸
   *
   * @values large middle small mini
   * @defaultValue middle
   */
  size: {
    type: String as PropType<ButtonSizeType>,
    default: (): ButtonSizeType => 'middle',
    validator: (val: ButtonSizeType): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  /**
   * 排列方向
   * 
   * @values horizontal vertical
   * @defaultValue horizontal
   */
  direction: {
    type: String as PropType<ButtonGroupDirectionType>,
    default: (): ButtonGroupDirectionType => 'horizontal',
    validator: (val: ButtonGroupDirectionType): boolean => {
      return (['horizontal', 'vertical'] as const).includes(val)
    }
  }
} as const

export type ButtonGroupPropsType = ExtractPropTypes<typeof Props>

export const BUTTON_GROUP_PROPS_KEY: InjectionKey<ButtonGroupPropsType> =
  Symbol('button-group-props-key')
