import type { ProgressProps } from './props'

export type { ProgressProps } from './props'

/** 注入的依赖项类型 */
export type ProgressProvide = ProgressProps & { percent: number }

/** 不同状态 */
export type ProgressState = 'line' | 'circle'
