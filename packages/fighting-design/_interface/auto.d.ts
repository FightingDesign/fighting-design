import type { VNode, Component } from 'vue'

/**
 * class 类名集合类型
 *
 * 多数情况下在 computed 中计算返回
 */
export type ClassList = readonly (string | Record<string, unknown>)[]

/**
 * 事件参数类型接口
 * 
 * @see Event https://developer.mozilla.org/zh-CN/docs/Web/API/Event
 */
export interface HandleEvent {
  <T extends Event>(evt: T): void
}

/**
 * 不同类型
 */
export type FightingType = 'primary' | 'success' | 'danger' | 'warning' | 'default'

/**
 * 不同尺寸类型
 */
export type FightingSize = 'large' | 'middle' | 'small' | 'mini'

/**
 * icon 类型
 */
export type FightingIcon = VNode | Component
