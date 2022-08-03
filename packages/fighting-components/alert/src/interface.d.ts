export type alertType = 'primary' | 'success' | 'danger' | 'warning' | 'default'
export interface overflow {
  hidden?: string
  roll?: string
  ellipsis?: string
}
export interface handleCloseInterface {
  (evt: MouseEvent): void
}

export interface fixedStyleInterface {
  top?: string
  button?: string
  right?: string
  left?: string
}
