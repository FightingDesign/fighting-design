import type { VNode, Component } from 'vue'

/**
 * class 类名集合类型
 */
export type ClassList = readonly (string | Record<string, unknown>)[]

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
