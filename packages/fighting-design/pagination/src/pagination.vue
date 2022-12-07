<script lang="ts" setup name="FPagination">
  import { Props } from './props'
  import { computed, ref, watchEffect } from 'vue'
  import { isNumber } from '../../_utils'
  import {
    FIconChevronLeftVue,
    FIconChevronRightVue,
    FIconMenuMeatball
  } from '../../_svg'
  import { FInput } from '../../input'
  import { FSelect } from '../../select'
  import { FButton } from '../../button'
  import { FOption } from '../../option'
  import { FSvgIcon } from '../../svg-icon'
  import type { ClassList } from '../../_interface'

  const prop = defineProps(Props)
  const emit = defineEmits({
    'update:current': (current: number): boolean => isNumber(current),
    'update:pageSize': (pageSize: number): boolean => isNumber(pageSize)
  })

  /**
   * 当前快速跳转的页码
   */
  const jumpCurrent = ref<string>('1')
  /**
   * 下拉菜单绑定的默认值，每页条数
   */
  const pagesLen = ref<number>(10)
  /**
   * 上一页更多图标的 visible
   */
  const showPrevMore = ref<boolean>(false)
  /**
   * 下一页更多图标的 visible
   */
  const showNextMore = ref<boolean>(false)

  /**
   * 计算出最大页码数
   */
  const maxCount = computed((): number => {
    const page1: number = Math.floor(prop.total / prop.pageSize)
    const model: number = prop.total % prop.pageSize
    return model === 0 ? page1 : page1 + 1
  })

  /**
   * 主要分页 ul 样式列表
   */
  const listClassList = computed((): ClassList => {
    const { background, round, disabled } = prop

    return [
      'f-pagination__pages',
      {
        'f-pagination__pages-round': round,
        'f-pagination__pages-disabled': disabled,
        'f-pagination__pages-background': background
      }
    ] as const
  })

  /**
   * 计算出第一页的样式
   */
  const firstPage = computed((): ClassList => {
    const { current } = prop

    return [
      'f-pagination__pages-item',
      {
        'f-pagination__pages-item-active': current === 1
      }
    ] as const
  })

  /**
   * 计算出最后一页的样式
   */
  const lastPage = computed((): ClassList => {
    const { current } = prop

    return [
      'f-pagination__pages-item',
      {
        'f-pagination__pages-item-active': current === maxCount.value
      }
    ] as const
  })

  /**
   * 计算出需要循环遍历的 pages
   */
  const pages = computed((): number[] => {
    const pagerCount = Number(prop.pagerCount)
    const currentPage = Number(prop.current)
    const halfPagerCount = (pagerCount - 1) / 2
    let showPrevMore = false
    let showNextMore = false

    if (maxCount.value > pagerCount) {
      if (prop.current > pagerCount - halfPagerCount) {
        showPrevMore = true
      }
      if (prop.current < maxCount.value - halfPagerCount) {
        showNextMore = true
      }
    }

    const arr: number[] = []
    if (!showPrevMore && showNextMore) {
      for (let startPage = 2; startPage < pagerCount; startPage++) {
        arr.push(startPage)
      }
    } else if (showPrevMore && !showNextMore) {
      let startPage = maxCount.value - (pagerCount - 2)
      for (let i = startPage; i < maxCount.value; i++) {
        arr.push(i)
      }
    } else if (showPrevMore && showNextMore) {
      let offset = Math.floor(pagerCount / 2) - 1
      for (let i = currentPage - offset; i <= currentPage + offset; i++) {
        arr.push(i)
      }
    } else {
      for (let i = 2; i < pagerCount; i++) {
        arr.push(i)
      }
    }
    return arr
  })

  /**
   * 翻页方法 可控制上一页或者下一页切换
   *
   * @param target 切换的方向
   */
  const handelTurnPages = (target: 'next' | 'prev'): void => {
    if (prop.disabled) return

    /**
     * 最新的页码数
     */
    let newCurrent

    const map = {
      /**
       * 下一页切换
       */
      next: (): void => {
        const newCurrent =
          prop.current === maxCount.value ? maxCount.value : prop.current + 1
        prop.onNext && prop.onNext(newCurrent, prop.pageSize)
        emit('update:current', newCurrent)
      },
      /**
       * 上一页切换
       */
      prev: (): void => {
        newCurrent = prop.current === 1 ? 1 : prop.current - 1
        prop.onPrev && prop.onPrev(newCurrent, prop.pageSize)
        emit('update:current', newCurrent)
      }
    } as const

    map[target] && map[target]()
  }

  /**
   * 点击指定页面的回调
   */
  const handelChange = (newCurrent: number): void => {
    if (prop.disabled) return
    emit('update:current', newCurrent)
    prop.onChange && prop.onChange(newCurrent, prop.pageSize)
  }

  /**
   * 快速跳转框确定值的行为目前设定为:失焦或 enter 确定
   */
  const jumpHandleValue = (): void => {
    if (prop.disabled) return

    if (Number(jumpCurrent.value) > pages.value.length) {
      jumpCurrent.value = String(pages.value.length)
    }

    emit('update:current', Number(jumpCurrent.value))
  }

  watchEffect(() => {
    const pagerCount = Number(prop.pagerCount)
    let halfPagerCount = (pagerCount - 1) / 2

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
   * 点击 ul 内部元素事件
   *
   * 此处采用事件委托
   *
   * @param evt 事件对象
   */
  const handelPageClick = (evt: Event): void => {
    const target = evt.target as HTMLElement

    /**
     * 如果点击的是 ul 或者禁用状态 则返回
     *
     * @see toLowerCase https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
     */
    if (target.tagName.toLowerCase() === 'ul' || prop.disabled) {
      return
    }

    /**
     * 最新的页数
     */
    let newPage = Number(target.textContent)
    /**
     * 第几页开始折叠
     */
    let pagerCount = prop.pagerCount
    /**
     * 当前选中页码
     */
    let current = prop.current
    let countPager = pagerCount - 2

    if (target.className.includes('f-pagination__prev-more')) {
      newPage = current - countPager
    }
    if (target.className.includes('f-pagination__next-more')) {
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
      emit('update:current', newPage)
      prop.onChange && prop.onChange(newPage, prop.pageSize)
    }
  }
</script>

<template>
  <div class="f-pagination">
    <!-- 下拉菜单选择每页大小 -->
    <f-select
      v-if="pageSizes && pageSizes.length"
      v-model="pagesLen"
      :width="60"
      :disabled="disabled"
    >
      <f-option
        v-for="item in pageSizes"
        :key="item"
        :value="item"
        :label="item + '/页'"
      />
    </f-select>

    <!-- 上一页按钮 -->
    <f-button
      circle
      :disabled="disabled"
      :size="background ? 'middle' : 'small'"
      :style="{ borderRadius: '2px' }"
      :before-icon="prevIcon || FIconChevronLeftVue"
      @click="handelTurnPages('prev')"
    />

    <!-- 分页主内容 -->
    <ul v-if="total > 0" :class="listClassList" @click="handelPageClick">
      <!-- 第一页 -->
      <li :class="firstPage">1</li>

      <!-- 省略号 -->
      <li
        v-if="showPrevMore"
        :class="['f-pagination__prev-more', 'f-pagination__pages-item']"
      >
        <f-svg-icon :size="15" :icon="FIconMenuMeatball" />
      </li>

      <!-- 中间的页码 -->
      <li
        v-for="item in pages"
        :key="item"
        :class="[
          'f-pagination__pages-item',
          {
            'f-pagination__pages-item-active': current === item
          }
        ]"
        @click="handelChange(item)"
      >
        {{ item }}
      </li>

      <!-- 省略号 -->
      <li
        v-if="showNextMore"
        :class="['f-pagination__next-more', 'f-pagination__pages-item']"
      >
        <f-svg-icon :size="15" :icon="FIconMenuMeatball" />
      </li>

      <!-- 最后一页 -->
      <li v-if="total > 1" :class="lastPage">
        {{ maxCount }}
      </li>
    </ul>

    <!-- 下一页按钮 -->
    <f-button
      circle
      :disabled="disabled"
      :size="background ? 'middle' : 'small'"
      :style="{ borderRadius: '2px' }"
      :before-icon="nextIcon || FIconChevronRightVue"
      @click="handelTurnPages('next')"
    />

    <!-- 快速跳转搜索框 -->
    <f-input
      v-if="jumpSearch"
      v-model="jumpCurrent"
      placeholder="输入跳转的页数"
      class="f-pagination__jump"
      :disabled="disabled"
      :on-blur="jumpHandleValue"
      :on-enter="jumpHandleValue"
    />
  </div>
</template>
