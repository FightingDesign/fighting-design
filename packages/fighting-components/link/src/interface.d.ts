export type linkType = 'primary' | 'success' | 'danger' | 'warning'

export type linkTarget = '_self' | '_blank' | '_parent' | '_top' | ''

export type linkHover = 'line' | 'bag' | ''

export interface onClickInterface {
  (evt: PointerEvent): void
}
