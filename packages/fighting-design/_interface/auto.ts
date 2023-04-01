import type { VNode, Component } from 'vue'

/** class 类名集合类型 */
export type ClassList = (string | Record<string, unknown>)[]

/** 不同类型 */
export type FightingType =
  | 'primary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'default'
  | 'info'

/** 不同尺寸类型 */
export type FightingSize = 'large' | 'middle' | 'small' | 'mini'

/** 适应容器的方式 */
export type FightingFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

/** icon 类型 */
export type FightingIcon = VNode | Component

/**
 * 该属性指定在何处显示链接的资源
 *
 * 原生属性
 *
 * @see target https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-target
 */
export type FightingTarget = '_blank' | '_self' | '_parent' | '_top'
