export type DrawerDirectionType = 'left' | 'top' | 'right' | 'bottom'

export interface HandleCloseInterface {
  (target: 'mask' | 'icon'): void
}
