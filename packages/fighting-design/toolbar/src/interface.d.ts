export type toolbarPositionType = 'top' | 'bottom' | 'right' | 'left'

export type toolbarType = 'large' | 'middle' | 'small' | 'mini'

export interface handleClickInterface {
  (event: MouseEvent): void
}

export interface clickEmitInterface {
  evt: MouseEvent
  key: string | undefined
}
