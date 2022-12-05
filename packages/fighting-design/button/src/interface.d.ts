import type { ButtonHTMLAttributes } from 'vue'

export type { ButtonProps } from './props'

/**
 * 不同尺寸类型
 */
export type ButtonSize = 'large' | 'middle' | 'small' | 'mini'

/**
 * 该属性指定在何处显示链接的资源
 *
 * 原生属性
 *
 * @see target https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-target
 */
export type ButtonTarget = '_blank' | '_self' | '_parent' | '_top'

/**
 * 不同类型
 */
export type ButtonType =
  | 'default'
  | 'primary'
  | 'success'
  | 'danger'
  | 'warning'

/**
 * 原生 type 属性
 *
 * @see type https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button#attr-type
 */
export type ButtonNative = NonNullable<ButtonHTMLAttributes['type']>
