export type { MenuProps } from './menu'

/** 不同导航栏模式 */
export type MenuMode = 'horizontal' | 'vertical' | 'inline'

/**
 * 注入的依赖项类型接口
 *
 * @param {  "horizontal" | "vertical" | "inline" } mode 导航栏模式
 * @param { string | number } defaultActive 默认选中的 name
 * @param { Function } setActiveName 修改选中 name
 */
export interface MenuProvide {
  mode: MenuMode
  defaultActive: string | number
  setActiveName: (name: string | number) => void
}
