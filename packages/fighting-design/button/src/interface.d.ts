import type { ButtonHTMLAttributes } from 'vue'

export type { ButtonPropsType } from './button'

export type ButtonSizeType = 'large' | 'middle' | 'small' | 'mini'

export type ButtonTargetType = '_blank' | '_self' | '_parent' | '_top'

export type ButtonType =
  | 'default'
  | 'primary'
  | 'success'
  | 'danger'
  | 'warning'

export type ButtonNativeType = NonNullable<ButtonHTMLAttributes['type']>
