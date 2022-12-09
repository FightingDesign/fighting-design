import type { PropType, ExtractPropTypes, InjectionKey } from 'vue'
import type { FightingSize } from '../../_interface'
import type { ButtonGroupDirection } from './interface'

export const Props = {
  /**
   * 按钮尺寸
   *
   * @values large middle small mini
   * @defaultValue middle
   */
  size: {
    type: String as PropType<FightingSize>,
    default: (): FightingSize => 'middle',
    validator: (val: FightingSize): boolean => {
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
    type: String as PropType<ButtonGroupDirection>,
    default: (): ButtonGroupDirection => 'horizontal',
    validator: (val: ButtonGroupDirection): boolean => {
      return (['horizontal', 'vertical'] as const).includes(val)
    }
  }
} as const

export type ButtonGroupProps = ExtractPropTypes<typeof Props>

export const BUTTON_GROUP_PROPS_KEY: InjectionKey<ButtonGroupProps> = Symbol(
  'button-group-props-key'
)
