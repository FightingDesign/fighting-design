export type { DrawerPropsType } from './drawer'

export type DrawerDirectionType = 'left' | 'top' | 'right' | 'bottom'

export interface DrawerCallbackInterface {
  (evt: MouseEvent): void
}
