export type linkType = 'default' | 'primary' | 'success' | 'danger' | 'warning'

export type linkTarget = '_self' | '_blank' | '_parent' | '_top' | ''

export type linkHover = 'line' | 'bag' | ''

export interface handleClickInterface {
  (evt: Event): void
}
