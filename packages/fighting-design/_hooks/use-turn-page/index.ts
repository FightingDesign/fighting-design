import { ref } from 'vue'
import { useRun } from '..'
import { PAGINATION_NEXT, PAGINATION_ITEM, PAGINATION_PREV } from '../../_tokens'
import type { SelectModelValue } from '../../select'
import type { UsePageReturn } from '..'
import type { PaginationProps } from '../../pagination'
import type { Ref } from 'vue'

/**
 * useTurnPage 返回值类型接口
 *
 * @param { Object } jumpCurrent 跳转默认选中的也码数
 * @param { Function } selectChange select 发生改变时触发的回调
 * @param { Function } handelChange 点击指定页面的回调
 * @param { Function } handleInput 快速跳转框确定值的行为
 * @param { Function } handelClick 点击每一项页码时执行的回调
 */
export interface UseTurnPageReturn {
  jumpCurrent: Ref<string>
  selectChange: (newValue: SelectModelValue) => void
  handelChange: (newCurrent: number, evt: MouseEvent) => void
  handleInput: () => void
  handelClick: (evt: MouseEvent) => void
}

/**
 * 这对分页组件翻页的一些方法封装
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } prop props 参数
 * @param { Object } emit 回调参数
 * @param { Object } pages 需要循环遍历的 pages
 * @param { Object } maxCount 最大页码数
 * @returns { Object }
 */
export const useTurnPage = (
  prop: PaginationProps,
  modelValue: {
    currentModelValue: Ref<number>
    pageSizeModelValue: Ref<number>
  },
  pages: UsePageReturn['pages'],
  maxCount: UsePageReturn['maxCount']
): UseTurnPageReturn => {
  const { run } = useRun()

  /**
   * select 发生改变时触发的回调
   *
   * @param { string | number | boolean } newValue 最新的 value
   */
  const selectChange = (newValue: SelectModelValue): void => {
    const maxValue: number = Math.ceil(prop.total / Number(newValue))

    // 如果当前用户选择的值是大于总页数的,那么直接将总页数的最大值赋值给 current
    if (prop.current > maxValue) {
      modelValue.currentModelValue.value = maxValue
    }
    modelValue.pageSizeModelValue.value = Number(newValue)
  }

  /**
   * 点击指定页面的回调
   *
   * @param { number } newCurrent 最新页码数
   * @param { Object } evt 事件对象
   */
  const handelChange = (newCurrent: number, evt: MouseEvent): void => {
    if (prop.disabled) return
    modelValue.currentModelValue.value = newCurrent
    run(prop.onChange, newCurrent, prop.pageSize, evt)
  }

  /** 跳转默认选中的也码数 */
  const jumpCurrent = ref<string>('1')

  /** 快速跳转框确定值的行为目前设定为：失焦或 enter 确定 */
  const handleInput = (): void => {
    if (prop.disabled) return

    // 如果输入的值大于最大值
    if (Number(jumpCurrent.value) > pages.value.length) {
      jumpCurrent.value = String(pages.value.length)
    }

    modelValue.currentModelValue.value = Number(jumpCurrent.value)
  }

  /**
   * 点击每一项页码时执行的回调
   *
   * 采用事件委托
   *
   * @param { Object } evt 事件对象
   */
  const handelClick = (evt: MouseEvent): void => {
    // 禁用状态直接返回
    if (prop.disabled) return

    /** 当前点击的元素节点 */
    const target: HTMLElement = evt.target as HTMLElement

    // 判断点击的是否为子节点
    if (target.className.includes(PAGINATION_ITEM)) {
      /** 最新的页数 */
      let newPage = Number(target.textContent)
      /** 第几页开始折叠 */
      const pagerCount: number = prop.pagerCount
      /** 当前选中页码 */
      const current: number = prop.current
      /** 计数页码 */
      const countPager: number = pagerCount - 2

      /**
       * 如果点击的是前一个省略号
       *
       * 也就行需要往前切换页码
       */
      if (target.className.includes(PAGINATION_PREV)) {
        newPage = current - countPager
      }

      /**
       * 如果点击是是后一个省略号
       *
       * 也就是需要往后切换页码
       */
      if (target.className.includes(PAGINATION_NEXT)) {
        newPage = current + countPager
      }

      if (!Number.isNaN(newPage)) {
        if (newPage < 1) {
          newPage = 1
        }
        if (newPage > maxCount.value) {
          newPage = maxCount.value
        }
      }

      if (newPage !== current) {
        modelValue.currentModelValue.value = newPage
        run(prop.onChange, newPage, prop.pageSize, evt)
      }
    }
  }

  return {
    jumpCurrent,
    selectChange,
    handelChange,
    handleInput,
    handelClick
  }
}
