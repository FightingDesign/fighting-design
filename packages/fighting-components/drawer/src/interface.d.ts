export type drawerDirectionType = 'left' | 'top' | 'right' | 'bottom'

// export type dividerType = 'dashed' | 'dotted' | 'double' | 'solid'

export interface transitionEventInterface {
  (evt: MouseEvent): void
}

export interface handleCloseInterface {
  (): void
}
