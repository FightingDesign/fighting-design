export type alertType = 'primary' | 'success' | 'danger' | 'warning' | 'default'

export type overflowType = 'hidden' | ''

export interface handleCloseInterface {
  (evt: MouseEvent): void
}
