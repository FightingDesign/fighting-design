<script lang="ts" setup name="FPagination">
  import { Props } from './props'
  import { computed, ref, watchEffect } from 'vue'
  import { isNumber } from '../../_utils'
  import { useList, useRun } from '../../_hooks'
  import { FIconChevronLeftVue, FIconChevronRightVue, FIconMenuMeatball } from '../../_svg'
  import { FInput } from '../../input'
  import { FSelect } from '../../select'
  import { PAGINATION_ITEM } from '../../_tokens'
  import { FOption } from '../../option'
  import { FSvgIcon } from '../../svg-icon'
  import { EMIT_CURRENT, EMIT_PAGESIZE } from '../../_tokens'
  import type { SelectModelValue } from '../../select'

  const prop = defineProps(Props)
  const emit = defineEmits({
    [EMIT_CURRENT]: (current: number): boolean => isNumber(current),
    [EMIT_PAGESIZE]: (pagesize: number): boolean => isNumber(pagesize)
  })

  const { run } = useRun()

  /** 当前快速跳转的页码 */
  const jumpCurrent = ref<string>('1')
  /** 下拉菜单绑定的默认值，每页条数 */
  const pagesLen = ref<number>(10)
  /** 上一页更多图标的 visible */
  const showPrevMore = ref<boolean>(false)
  /** 下一页更多图标的 visible */
  const showNextMore = ref<boolean>(false)

  /**
   * select 发生改变时触发的回调
   *
   * @param { string | number | boolean } newValue 最新的 value
   */
  const selectChange = (newValue: SelectModelValue): void => {
    emit(EMIT_PAGESIZE, Number(newValue))
  }

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

    /** 如果最大页码数 > 当前页码超过多少需要展示省略号 */
    if (maxCount.value > pagerCount) {
      if (prop.current > pagerCount - halfPagerCount) {
        showPrevMore = true
      }
      if (prop.current < maxCount.value - halfPagerCount) {
        showNextMore = true
      }
    }

    /** 结果数组 */
    const pageList: number[] = []

    if (!showPrevMore && showNextMore) {
      for (let startPage = 2; startPage < pagerCount; startPage++) {
        pageList.push(startPage)
      }
    } else if (showPrevMore && !showNextMore) {
      let startPage: number = maxCount.value - (pagerCount - 2)
      for (let i = startPage; i < maxCount.value; i++) {
        pageList.push(i)
      }
    } else if (showPrevMore && showNextMore) {
      let offset: number = Math.floor(pagerCount / 2) - 1
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

    const map = {
      /** 下一页切换 */
      next: (): void => {
        const newCurrent = prop.current === maxCount.value ? maxCount.value : prop.current + 1
        emit(EMIT_CURRENT, newCurrent)
        run(prop.onNext, newCurrent, prop.pageSize)
      },
      /**上一页切换 */
      prev: (): void => {
        newCurrent = prop.current === 1 ? 1 : prop.current - 1
        emit(EMIT_CURRENT, newCurrent)
        run(prop.onPrev, newCurrent, prop.pageSize)
      }
    } as const

    run(map[target])
  }

  /**
   * 点击指定页面的回调
   *
   * @param { number } newCurrent 最新页码数
   * @param { Object } evt 事件对象
   */
  const handelChange = (newCurrent: number, evt: MouseEvent): void => {
    if (prop.disabled) return
    emit(EMIT_CURRENT, newCurrent)
    run(prop.onChange, newCurrent, prop.pageSize, evt)
  }

  /** 快速跳转框确定值的行为目前设定为：失焦或 enter 确定 */
  const handleInput = (): void => {
    if (prop.disabled) return

    /** 如果输入的值大于最大值 */
    if (Number(jumpCurrent.value) > pages.value.length) {
      jumpCurrent.value = String(pages.value.length)
    }

    emit(EMIT_CURRENT, Number(jumpCurrent.value))
  }

  watchEffect((): void => {
    /** 当页码超过多少时开始展开省略符号 */
    const pagerCount = Number(prop.pagerCount)
    let halfPagerCount: number = (pagerCount - 1) / 2

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

  /**
   * 点击每一项页码时执行的回调
   *
   * 采用事件委托
   *
   * @param { Object } evt 事件对象
   */
  const handelClick = (evt: MouseEvent): void => {
    /** 禁用状态直接返回 */
    if (prop.disabled) return

    /** 当前点击的元素节点 */
    const target: HTMLElement = evt.target as HTMLElement

    /** 判断点击的是否为子节点 */
    if (target.className.includes(PAGINATION_ITEM)) {
      /** 最新的页数 */
      let newPage = Number(target.textContent)
      /** 第几页开始折叠 */
      let pagerCount: number = prop.pagerCount
      /** 当前选中页码 */
      let current: number = prop.current
      /** 计数页码 */
      let countPager: number = pagerCount - 2

      /**
       * 如果点击的是前一个省略号
       *
       * 也就行需要往前切换页码
       */
      if (target.className.includes('f-pagination__prev')) {
        newPage = current - countPager
      }

      /**
       * 如果点击是是后一个省略号
       *
       * 也就是需要往后切换页码
       */
      if (target.className.includes('f-pagination__next')) {
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
        emit(EMIT_CURRENT, newPage)
        run(prop.onChange, newPage, prop.pageSize, evt)
      }
    }
  }

  const { classes } = useList(prop, 'pagination')

  /** 类名列表 */
  const classList = classes(['background', 'round', 'disabled'], 'f-pagination')
</script>

<template>
  <div :class="classList">
    <!-- 下拉菜单选择每页大小 -->
    <template v-if="pageSizes && pageSizes.length">
      <f-select v-model="pagesLen" :width="120" :disabled="disabled" :on-change="selectChange">
        <f-option v-for="item in pageSizes" :key="item" :value="item" :label="item + '/页'" />
      </f-select>
    </template>

    <!-- 上一页按钮 -->
    <button class="f-pagination__button" :disabled="disabled" @click="handelTurnPages('prev')">
      <f-svg-icon :size="14" :icon="prevIcon || FIconChevronLeftVue" />
    </button>

    <!-- 分页主内容 -->
    <div v-if="total > 0" class="f-pagination__pages" @click="handelClick($event)">
      <!-- 第一页 -->
      <div
        :class="[
          PAGINATION_ITEM,
          {
            [`${PAGINATION_ITEM}-active`]: current === 1
          }
        ]"
      >
        1
      </div>

      <!-- 省略号 -->
      <div v-if="showPrevMore" :class="[PAGINATION_ITEM, 'f-pagination__prev']">
        <f-svg-icon :size="15" :icon="FIconMenuMeatball" />
      </div>

      <!-- 中间的页码 -->
      <div
        v-for="item in pages"
        :key="item"
        :class="[
          PAGINATION_ITEM,
          {
            [`${PAGINATION_ITEM}-active`]: current === item
          }
        ]"
        @click="handelChange(item, $event)"
      >
        {{ item }}
      </div>

      <!-- 省略号 -->
      <div v-if="showNextMore" :class="[PAGINATION_ITEM, 'f-pagination__next']">
        <f-svg-icon :size="15" :icon="FIconMenuMeatball" />
      </div>

      <!-- 最后一页 -->
      <div
        v-if="total > 1"
        :class="[
          PAGINATION_ITEM,
          {
            [`${PAGINATION_ITEM}-active`]: current === maxCount
          }
        ]"
      >
        {{ maxCount }}
      </div>
    </div>

    <!-- 下一页按钮 -->
    <button class="f-pagination__button" :disabled="disabled" @click="handelTurnPages('next')">
      <f-svg-icon :size="14" :icon="nextIcon || FIconChevronRightVue" />
    </button>

    <!-- 快速跳转搜索框 -->
    <template v-if="jumpSearch">
      <f-input
        v-model="jumpCurrent"
        placeholder="输入跳转的页数"
        class="f-pagination__jump"
        :disabled="disabled"
        :on-blur="handleInput"
        :on-enter="handleInput"
      />
    </template>
  </div>
</template>
