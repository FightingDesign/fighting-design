import type { ComputedRef, Ref } from 'vue'

/** emit 类型接口 */
export interface UsePageEmit {
  (event: 'update:current', current: number): void
  (event: 'update:pageSize', pagesize: number): void
}

/**
 * usePage 返回值类型接口
 *
 * @param { Object } pages 需要循环遍历的 pages
 * @param { Object } showNextMore 上一页更多图标的 visible
 * @param { Object } showPrevMore 下一页更多图标的 visible
 * @param { Object } maxCount 计算出最大页码数
 * @param { Function } handelTurnPages 翻页方法 可控制上一页或者下一页切换
 */
export interface UsePageReturn {
  pages: ComputedRef<number[]>
  showNextMore: Ref<boolean>
  showPrevMore: Ref<boolean>
  maxCount: ComputedRef<number>
  handelTurnPages: (target: 'next' | 'prev') => void
}
