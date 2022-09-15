export type buttonSize = 'large' | 'middle' | 'small' | 'mini'

export type buttonTarget = '_blank' | '_self' | '_parent' | '_top'

export type buttonType =
  | 'default'
  | 'primary'
  | 'success'
  | 'danger'
  | 'warning'

export type buttonNativeType = 'button' | 'submit' | 'reset'

export interface handleClickInterface {
  (evt: MouseEvent): void
}
