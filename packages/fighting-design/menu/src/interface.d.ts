import type { ComputedRef, Ref } from 'vue'

export type { MenuProps } from './menu'

/** 不同导航栏模式 */
export type MenuMode = 'horizontal' | 'vertical' | 'inline'

/**
 * menu-item 点击执行的回调类型
 *
 * @param { Object } evt 事件对象
 * @param { string } name 唯一标识
 */
export type MenuItemClick = (evt: MouseEvent, name: string) => void

/**
 * submenu 点击执行的回调类型
 *
 * @param { Object } evt 事件对象
 * @param { boolean } target 打开状态
 */
export type SubmenuClick = (evt: MouseEvent, target: boolean) => void

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
