<script lang="ts" setup name="FPagination">
  import { Props } from './props'
  import { computed, ref, watchEffect } from 'vue'
  import {
    FIconChevronLeftVue,
    FIconChevronRightVue,
    FIconMenuMeatball,
    FIconMediaRewind,
    FIconMediaFastForward
  } from '../../_svg'
  import { FInput } from '../../input'
  import { FSelect } from '../../select'
  import { FButton } from '../../button'
  import { FOption } from '../../option'
  import { FSvgIcon } from '../../svg-icon'
  import type { ClassListInterface } from '../../_interface'

  const prop = defineProps(Props)
  const emit = defineEmits({
    'update:current': (current: number): boolean => typeof current === 'number',
    'update:pageSize': (pageSize: number): boolean =>
      typeof pageSize === 'number'
  })

  /**
   * 当前快速跳转的页码
   */
  const jumpCurrent = ref<string>('1')

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
   * 上一页箭头图标 hover
   */
  const prevHover = ref<boolean>(false)
  /**
   * 上一页箭头图标 focus
   */
  const prevFocus = ref<boolean>(false)
  /**
   * 下一页箭头图标 hover
   */
  const nextHover = ref<boolean>(false)

  // 下一页箭头图标focus
  const nextFocus = ref<boolean>(false)

  /**
   * 计算出最大页码数
   */
  const maxCount = computed((): number => {
    const page1: number = Math.floor(prop.total / prop.pageSize)
    const model: number = prop.total % prop.pageSize

    return model === 0 ? page1 : page1 + 1
  })

  /**
   * ul的计算样式
   */
  const listClassList = computed((): ClassListInterface => {
    const { background, round, disabled } = prop

    return [
      'f-pagination__pages',
      {
        'f-pagination__state': background || round,
        'f-pagination__pages-disabled': disabled
      }
    ] as const
  })

  /**
   * 计算出第一页的样式
   */
  const firstPage = computed((): ClassListInterface => {
    const { background, round, current } = prop

    return [
      'f-pagination__pages-li',
      {
        'f-pagination__pages-li-choose': current === 1,
        'f-pagination__pages-li-background-choose':
          current === 1 && (background || round),
        'f-pagination__background': background,
        'f-pagination__circle': round
      }
    ] as const
  })

  /**
   * 计算出最后一页的样式
   */
  const lastPage = computed((): ClassListInterface => {
    const { background, round, current } = prop

    return [
      'f-pagination__pages-li',
      {
        'f-pagination__pages-li-choose': current === maxCount.value,
        'f-pagination__pages-li-background-choose':
          current === maxCount.value && (background || round),
        'f-pagination__background': background,
        'f-pagination__circle': round
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
   * 点击上一页触发的回调
   */
  const toPrev = (): void => {
    if (prop.disabled) return
    const newCurrent = prop.current === 1 ? 1 : prop.current - 1
    emit('update:current', newCurrent)
    prop.prevClick && prop.prevClick(newCurrent, prop.pageSize)
  }

  /**
   * 点击下一页触发的回调
   */
  const toNext = (): void => {
    if (prop.disabled) return
    const newCurrent: number =
      prop.current === maxCount.value ? maxCount.value : prop.current + 1
    emit('update:current', newCurrent)
    prop.nextClick && prop.nextClick(newCurrent, prop.pageSize)
  }

  /**
   * 点击指定页面的回调
   */
  const change = (newCurrent: number): void => {
    if (prop.disabled) return
    emit('update:current', newCurrent)
    prop.change && prop.change(newCurrent, prop.pageSize)
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
   */
  const pageClick = (evt: Event): void => {
    const target = evt.target as HTMLElement

    if (target.tagName.toLowerCase() === 'ul' || prop.disabled) {
      return
    }
    let newPage = Number(target.textContent)
    let pagerCount = prop.pagerCount
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
      prop.change && prop.change(newPage, prop.pageSize)
    }
  }

  // 显示箭头的 move事件
  const handleMoveEnter = (forward = false): void => {
    if (prop.disabled) return
    if (forward) {
      prevHover.value = true
    } else {
      nextHover.value = true
    }
  }

  // 显示箭头的 hover 事件
  const handleFocus = (forward = false): void => {
    if (prop.disabled) return
    if (forward) {
      prevFocus.value = true
    } else {
      nextFocus.value = true
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
      :on-click="toPrev"
    />

    <!-- 分页主内容 -->
    <ul v-if="prop.total > 0" :class="listClassList" @click="pageClick">
      <li v-if="prop.total > 0" :class="firstPage">1</li>

      <!-- 省略号 -->
      <li
        v-if="showPrevMore"
        :class="['f-pagination__prev-more', 'f-pagination__pages-li']"
        @mouseenter="handleMoveEnter(true)"
        @mouseleave="prevHover = false"
        @focus="handleFocus(true)"
        @blur="prevFocus = false"
      >
        <f-svg-icon
          v-if="(prevHover || prevFocus) && !disabled"
          :size="15"
          :icon="FIconMediaRewind"
        />
        <f-svg-icon v-else :size="15" :icon="FIconMenuMeatball" />
      </li>

      <li
        v-for="item in pages"
        :key="item"
        :class="[
          'f-pagination__pages-li',
          {
            'f-pagination__pages-li-choose': current === item,
            'f-pagination__pages-li-background-choose':
              current === item && (background || round),
            'f-pagination__background': background,
            'f-pagination__circle': round
          }
        ]"
        @click="change(item)"
      >
        {{ item }}
      </li>
      <li
        v-if="showNextMore"
        :class="['f-pagination__next-more', 'f-pagination__pages-li']"
        @mouseenter="handleMoveEnter()"
        @mouseleave="nextHover = false"
        @focus="handleFocus()"
        @blur="nextFocus = false"
      >
        <f-svg-icon
          v-if="(nextHover || nextFocus) && !disabled"
          :size="15"
          :icon="FIconMediaFastForward"
        />
        <f-svg-icon v-else :size="15" :icon="FIconMenuMeatball" />
      </li>
      <li v-if="prop.total > 1" :class="lastPage">
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
      :on-click="toNext"
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
