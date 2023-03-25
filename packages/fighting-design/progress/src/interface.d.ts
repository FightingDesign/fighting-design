import type { ComputedRef } from 'vue'

export type { ProgressProps } from './props'

/** 注入的依赖项类型 */
export type ProgressProvide = ProgressProps & { percent: ComputedRef<number> }
