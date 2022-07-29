export type drawerDirectionType = 'left' | 'top' | 'right' | 'bottom'

export interface transitionEventInterface {
  (evt: MouseEvent): void
}

export interface handleCloseInterface {
  (): void
}
