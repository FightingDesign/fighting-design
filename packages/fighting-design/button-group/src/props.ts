import { setStringProp } from '../../_utils'
import { FIGHTING_SIZE } from '../../_tokens'
import type { ExtractPropTypes, InjectionKey } from 'vue'
import type { FightingSize } from '../../_interface'
import type { ButtonGroupDirection } from './interface'

export const Props = {
  /**
   * 按钮尺寸
   *
   * @values large middle small mini
   */
  size: setStringProp<FightingSize>(undefined, (val: FightingSize): boolean => {
    return FIGHTING_SIZE.includes(val)
  }),
  /**
   * 排列方向
   *
   * @values horizontal vertical
   * @default horizontal
   */
  direction: setStringProp<ButtonGroupDirection>(
    'horizontal',
    (val: ButtonGroupDirection): boolean => {
      return (['horizontal', 'vertical'] as const).includes(val)
    }
  )
} as const

/** button-group 组件 props 类型 */
export type ButtonGroupProps = ExtractPropTypes<typeof Props>

/** button-group 组件注入的依赖项 */
export const BUTTON_GROUP_PROPS_KEY: InjectionKey<FightingSize> = Symbol(
  'button-group-props-key'
)
