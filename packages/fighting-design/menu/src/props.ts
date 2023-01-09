import { setStringNumberProp } from '../../_utils'
import type { PropType, ExtractPropTypes, InjectionKey } from 'vue'
import type { MenuMode } from './interface'

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
    type: String as PropType<MenuMode>,
    default: (): MenuMode => 'horizontal',
    validator: (val: MenuMode): boolean => {
      return (['horizontal', 'vertical', 'inline'] as const).includes(val)
    }
  },
  /** 默认激活的 name */
  activeName: setStringNumberProp()
} as const

export type MenuProps = ExtractPropTypes<typeof Props>

export const MENU_PROVIDE_KEY: InjectionKey<MenuMode> = Symbol('menu-provide-key')
