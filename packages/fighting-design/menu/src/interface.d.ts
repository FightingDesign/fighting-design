export type { MenuPropsType } from './menu'

export type MenuModeType = 'horizontal' | 'vertical' | 'inline'

export interface MenuProvideType {
  mode: MenuModeType
  activeName: string | number
}
