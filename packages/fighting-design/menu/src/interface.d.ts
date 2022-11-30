export type { MenuPropsType } from './menu'

export type MenuModeType = 'horizontal' | 'vertical' | 'inline'

export interface MenuChangeActiveNameInterface {
  (name: string | number): void
}

export interface MenuProvideInterface {
  mode: MenuModeType
  defaultActive: string | number
  changeActiveName: MenuChangeActiveNameInterface
}
