import { setStringNumberProp, setStringProp, setFunctionProp } from '../../_utils'
import type { ExtractPropTypes, InjectionKey } from 'vue'
import type { MenuMode, MenuProvide, MenuItemClick, SubmenuClick } from './interface'

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
  activeName: setStringNumberProp(),
  /** menu-item 点击执行的回调 */
  onMenuItemClick: setFunctionProp<MenuItemClick>(),
  /** submenu 点击执行的回调 */
  onSubmenuClick: setFunctionProp<SubmenuClick>()
} as const

/** menu 组件 props 类型 */
export type MenuProps = ExtractPropTypes<typeof Props>

/** menu 组件注入的依赖项 */
export const MENU_PROVIDE_KEY: InjectionKey<MenuProvide> = Symbol('menu-provide-key')
