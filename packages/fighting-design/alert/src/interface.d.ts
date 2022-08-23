export type alertType = 'primary' | 'success' | 'danger' | 'warning' | 'default'

export type overflowType = 'hidden' | 'roll' | 'ellipsis' | ''

export interface handleCloseInterface {
  (evt: MouseEvent): void
}

export interface fixedStyleInterface {
  top?: string
  button?: string
  right?: string
  left?: string
}
