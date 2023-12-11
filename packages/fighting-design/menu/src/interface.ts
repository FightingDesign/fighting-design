import type { ComputedRef, Ref } from 'vue'

export type { MenuProps } from './props'

/** 不同导航栏模式 */
export type MenuMode = 'horizontal' | 'vertical' | 'inline'

/**
 * menu-item 点击执行的回调类型
 *
 * @param { string } name 唯一标识
 * @param { Object } evt 事件对象
 */
export type MenuItemClick = (name: string, evt: MouseEvent) => void

/**
 * submenu 点击执行的回调类型
 *
 * @param { boolean } target 打开状态
 * @param { Object } evt 事件对象
 */
export type SubmenuClick = (target: boolean, evt: MouseEvent) => void

/**
 * 注入的依赖项类型接口
 *
 * @param {  "horizontal" | "vertical" | "inline" } mode 导航栏模式
 * @param { string | number } defaultActive 默认选中的 name
 * @param { Function } setActiveName 修改选中 name
 */
export interface MenuProvide {
  mode: Ref<MenuMode>
  defaultActive: ComputedRef<string | number>
  setActiveName: (name: string | number) => void
  onMenuItemClick: MenuItemClick
  onSubmenuClick: SubmenuClick
}
