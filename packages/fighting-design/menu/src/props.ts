import type { ExtractPropTypes, PropType } from 'vue'
import type { MenuModelType } from './interface'

export const Props = {
  /**
   * 导航栏模式
   *
   * @values horizontal vertical
   * @defaultValue horizontal
   */
  mode: {
    type: String as PropType<MenuModelType>,
    default: (): MenuModelType => 'horizontal',
    validator: (val: MenuModelType): boolean => {
      return (['horizontal', 'vertical'] as const).includes(val)
    }
  }
} as const

export type MenuPropsType = ExtractPropTypes<typeof Props>
