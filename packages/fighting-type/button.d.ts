export interface onClickInterface {
  (evt: Event): void
}

export type buttonSize = 'large' | 'middle' | 'small' | 'mini'

export type buttonTarget = '_blank' | '_self' | '_parent' | '_top'

export type buttonType = 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'info'
