export type { MenuProps } from './menu'

/**
 * 不同导航栏模式
 */
export type MenuModeType = 'horizontal' | 'vertical' | 'inline'

/**
 * 注入的依赖项类型接口
 *
 * @param mode 导航栏模式
 * @param accordion 是否为手风琴效果
 * @param defaultActive 默认选中的 name
 * @param setActiveName 修改选中 name
 */
export interface MenuProvide {
  mode: MenuModeType
  defaultActive: string | number
  setActiveName(name: string | number): void
}
