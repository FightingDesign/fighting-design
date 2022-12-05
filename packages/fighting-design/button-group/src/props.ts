import type { PropType, ExtractPropTypes, InjectionKey } from 'vue'
import type { ButtonSize } from '../../button'
import type { ButtonGroupDirectionType } from './interface'

export const Props = {
  /**
   * 按钮尺寸
   *
   * @values large middle small mini
   * @defaultValue middle
   */
  size: {
    type: String as PropType<ButtonSize>,
    default: (): ButtonSize => 'middle',
    validator: (val: ButtonSize): boolean => {
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

export type ButtonGroupProps = ExtractPropTypes<typeof Props>

export const BUTTON_GROUP_PROPS_KEY: InjectionKey<ButtonGroupProps> =
  Symbol('button-group-props-key')
