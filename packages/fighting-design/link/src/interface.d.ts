export type { LinkPropsType } from './props'

/**
 * 不同类型
 */
export type LinkType = 'default' | 'primary' | 'success' | 'danger' | 'warning'

/**
 * 该属性指定在何处显示链接的资源
 * 
 * 原生属性
 * 
 * @see target https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-target
 */
export type LinkTargetType = '_self' | '_blank' | '_parent' | '_top' | ''

/**
 * 不同 hover 状态
 */
export type LinkHoverType = 'line' | 'bag' | ''
