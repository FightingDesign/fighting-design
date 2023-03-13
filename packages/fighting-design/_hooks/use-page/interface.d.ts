import type { ComputedRef, Ref } from 'vue'

export interface UsePageEmit {
  (event: 'update:current', current: number): void
  (event: 'update:pageSize', pagesize: number): void
}

export interface UsePageReturn {
  pages: ComputedRef<number[]>
  showNextMore: Ref<boolean>
  showPrevMore: Ref<boolean>
  maxCount: ComputedRef<number>
  handelTurnPages: (target: 'next' | 'prev') => void
}
