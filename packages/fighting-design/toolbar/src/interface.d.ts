export type toolbarTypeType = 'large' | 'middle' | 'small' | 'mini'

export interface handleClickInterface {
  (event: MouseEvent): void
}

export interface clickEmitInterface {
  evt: MouseEvent
  key: string | undefined
}

export interface toolbarFixedStyleInterface {
  top?: string
  button?: string
  right?: string
  left?: string
}
