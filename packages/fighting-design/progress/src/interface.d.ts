import type { ComputedRef } from 'vue'

export type { ProgressProps } from './props'

export type ProgressProvide = ProgressProps & { percent: ComputedRef<number> }
