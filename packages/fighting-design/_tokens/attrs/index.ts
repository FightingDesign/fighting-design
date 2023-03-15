/** 尺寸 */
export const FIGHTING_SIZE = ['large', 'middle', 'small', 'mini'] as const

/** 类型 */
export const FIGHTING_TYPE = [
  'default',
  'primary',
  'success',
  'danger',
  'warning',
  'info'
] as const

/**
 * 原生 target 属性
 *
 * 该属性指定在何处显示链接的资源
 *
 * @see target https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-target
 */
export const FIGHTING_TARGET = ['_blank', '_self', '_parent', '_top'] as const

/**
 * 如何适应容器
 *
 * 原生样式属性
 *
 * @see object-fit https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit#try_it
 */
export const FIGHTING_FIT = ['fill', 'contain', 'cover', 'none', 'scale-down'] as const
