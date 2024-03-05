import { useRun } from '..'
import { computed, watchEffect, ref } from 'vue'
import type { PaginationProps } from '../../pagination'
import type { ComputedRef, Ref } from 'vue'

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

/**
 * 这对分页组件页码计算的一些方法封装
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } prop props 参数
 * @param { Object } modelValue 绑定值对象
 * @returns { Object }
 */
export const usePage = (
  prop: PaginationProps,
  modelValue: {
    currentModelValue: Ref<number>
    pageSizeModelValue: Ref<number>
  }
): UsePageReturn => {
  const { run } = useRun()

  /**
   * 计算出最大页码数
   *
   * @see Math.floor() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
   */
  const maxCount = computed((): number => {
    /** 四舍五入向下取整 */
    const page: number = Math.floor(prop.total / prop.pageSize)
    /**
     * 判断是否有余数
     *
     * 如果为 0 代表没有，非零代表有余数
     */
    const model: number = prop.total % prop.pageSize

    return model === 0 ? page : page + 1
  })

  /** 需要循环遍历的 pages */
  const pages = computed((): number[] => {
    /** 当前页码超过多少需要展示省略号 */
    const pagerCount = Number(prop.pagerCount)
    /** 当前选中页码 */
    const currentPage = Number(prop.current)
    /** 半页计数 */
    const halfPagerCount: number = (pagerCount - 1) / 2
    /** 显示上一页更多 */
    let showPrevMore = false
    /** 显示下一页更多 */
    let showNextMore = false
    /** 结果数组 */
    const pageList: number[] = []

    // 如果最大页码数 > 当前页码超过多少需要展示省略号
    if (maxCount.value > pagerCount) {
      if (prop.current > pagerCount - halfPagerCount) {
        showPrevMore = true
      }
      if (prop.current < maxCount.value - halfPagerCount) {
        showNextMore = true
      }
    } else {
      // 如果最大页码数小于 当前输入的 pagerCount
      for (let i = 2; i < maxCount.value; i++) {
        pageList.push(i)
      }
      return pageList
    }

    if (!showPrevMore && showNextMore) {
      for (let startPage = 2; startPage < pagerCount; startPage++) {
        pageList.push(startPage)
      }
    } else if (showPrevMore && !showNextMore) {
      const startPage: number = maxCount.value - (pagerCount - 2)
      for (let i = startPage; i < maxCount.value; i++) {
        pageList.push(i)
      }
    } else if (showPrevMore && showNextMore) {
      const offset: number = Math.floor(pagerCount / 2) - 1
      for (let i = currentPage - offset; i <= currentPage + offset; i++) {
        pageList.push(i)
      }
    } else {
      for (let i = 2; i < pagerCount; i++) {
        pageList.push(i)
      }
    }

    return pageList
  })

  /**
   * 翻页方法 可控制上一页或者下一页切换
   *
   * @param { 'next' | 'prev' } target 切换的方向
   */
  const handelTurnPages = (target: 'next' | 'prev'): void => {
    if (prop.disabled) return

    /** 最新的页码数 */
    let newCurrent

    /** 翻页映射方法 */
    const changeMap = {
      /** 下一页切换 */
      next: (): void => {
        const newCurrent: number =
          prop.current === maxCount.value ? maxCount.value : prop.current + 1

        modelValue.currentModelValue.value = newCurrent
        run(prop.onNext, newCurrent, prop.pageSize)
        run(prop.onChange, newCurrent, prop.pageSize)
      },
      /**上一页切换 */
      prev: (): void => {
        newCurrent = prop.current === 1 ? 1 : prop.current - 1
        modelValue.currentModelValue.value = newCurrent
        run(prop.onPrev, newCurrent, prop.pageSize)
        run(prop.onChange, newCurrent, prop.pageSize)
      }
    } as const

    run(changeMap[target])
  }

  /** 上一页更多图标的 visible */
  const showPrevMore = ref<boolean>(false)
  /** 下一页更多图标的 visible */
  const showNextMore = ref<boolean>(false)

  watchEffect(() => {
    /** 当页码超过多少时开始展开省略符号 */
    const pagerCount = Number(prop.pagerCount)
    const halfPagerCount: number = (pagerCount - 1) / 2

    showPrevMore.value = false
    showNextMore.value = false

    if (maxCount.value > pagerCount) {
      if (prop.current > pagerCount - halfPagerCount) {
        showPrevMore.value = true
      }
      if (prop.current < maxCount.value - halfPagerCount) {
        showNextMore.value = true
      }
    }
  })

  return { pages, showNextMore, showPrevMore, maxCount, handelTurnPages }
}
