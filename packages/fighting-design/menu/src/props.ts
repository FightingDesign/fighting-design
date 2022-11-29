import type { PropType, ExtractPropTypes, InjectionKey } from 'vue'
import type { MenuModeType } from './interface'

export const Props = {
  /**
   * 导航栏模式
   * 
   * 水平的 垂直的 内联的
   *
   * @values horizontal vertical inline
   * @defaultValue horizontal
   */
  mode: {
    type: String as PropType<MenuModeType>,
    default: (): MenuModeType => 'horizontal',
    validator: (val: MenuModeType): boolean => {
      return (['horizontal', 'vertical', 'inline'] as const).includes(val)
    }
  },
  /**
   * 默认激活的 name
   */
  activeName: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  }
} as const

export type MenuPropsType = ExtractPropTypes<typeof Props>

export const MENU_PROVIDE_KEY: InjectionKey<MenuModeType> = Symbol('menu-provide-key')
