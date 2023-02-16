import { setStringNumberProp, setStringProp } from '../../_utils'
import type { ExtractPropTypes, InjectionKey } from 'vue'
import type { MenuMode, MenuProvide } from './interface'

export const Props = {
  /**
   * 导航栏模式
   *
   * 水平的 垂直的 内联的
   *
   * @values horizontal vertical inline
   * @default horizontal
   */
  mode: setStringProp<MenuMode>('horizontal', (val: MenuMode): boolean => {
    return (['horizontal', 'vertical', 'inline'] as const).includes(val)
  }),
  /** 默认激活的 name */
  activeName: setStringNumberProp()
} as const

/** menu 组件 props 类型 */
export type MenuProps = ExtractPropTypes<typeof Props>

export const MENU_PROVIDE_KEY: InjectionKey<MenuProvide> = Symbol('menu-provide-key')
