export type { MenuPropsType } from './menu'

/**
 * 不同导航栏模式
 */
export type MenuModeType = 'horizontal' | 'vertical' | 'inline'

/**
 * 修改选中 name 回调类型接口
 *
 * @param name 需要设置的 name
 */
export interface MenuSetActiveNameInterface {
  (name: string | number): void
}

/**
 * 注入的依赖项类型接口
 *
 * @param mode 导航栏模式
 * @param defaultActive 默认选中的 name
 * @param setActiveName 修改选中 name
 */
export interface MenuProvideInterface {
  mode: MenuModeType
  defaultActive: string | number
  setActiveName: MenuSetActiveNameInterface
}
