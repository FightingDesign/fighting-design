<script lang="ts" setup>
  import { Props } from './props'
  import { ref } from 'vue'
  import { useList, usePage, useTurnPage } from '../../_hooks'
  import { FIconChevronLeft, FIconChevronRight, FIconMenuMeatball } from '../../_svg'
  import { FInput } from '../../input'
  import { FSelect } from '../../select'
  import {
    PAGINATION_NEXT,
    PAGINATION_ITEM,
    PAGINATION_PREV,
    PAGINATION
  } from '../../_tokens'
  import { FOption } from '../../option'
  import { FSvgIcon } from '../../svg-icon'

  defineOptions({ name: 'FPagination' })

  const prop = defineProps(Props)
  /** 当前选中页码 */
  const currentModelValue = defineModel<number>('current', {
    default: 1,
    type: Number
  })
  /** 总页数 */
  const pageSizeModelValue = defineModel<number>('pageSize', {
    default: 10,
    type: Number
  })

  const { pages, showNextMore, showPrevMore, maxCount, handelTurnPages } = usePage(prop, {
    currentModelValue,
    pageSizeModelValue
  })
  const { jumpCurrent, selectChange, handelChange, handleInput, handelClick } =
    useTurnPage(prop, { currentModelValue, pageSizeModelValue }, pages, maxCount)
  const { classes } = useList(prop, 'pagination')

  /** 下拉菜单绑定的默认值，每页条数 */
  const pagesLen = ref<number>(10)

  /** 类名列表 */
  const classList = classes(['background', 'round', 'disabled'], PAGINATION)
</script>

<template>
  <div :class="classList">
    <!-- 下拉菜单选择每页大小 -->
    <template v-if="pageSelect && pageSelect.length">
      <f-select v-model="pagesLen" :width="120" :disabled :on-change="selectChange">
        <f-option
          v-for="item in pageSelect"
          :key="item"
          :value="item"
          :label="item + '/页'"
        />
      </f-select>
    </template>

    <!-- 上一页按钮 -->
    <button class="f-pagination__button" :disabled @click="handelTurnPages('prev')">
      <f-svg-icon :size="14" :icon="prevIcon || FIconChevronLeft" />
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
      <div v-if="showPrevMore" :class="[PAGINATION_ITEM, PAGINATION_PREV]">
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
      <div v-if="showNextMore" :class="[PAGINATION_ITEM, PAGINATION_NEXT]">
        <f-svg-icon :size="15" :icon="FIconMenuMeatball" />
      </div>

      <!-- 最后一页 -->
      <div
        v-if="total > 1 && total > Number(pageSize)"
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
    <button class="f-pagination__button" :disabled @click="handelTurnPages('next')">
      <f-svg-icon :size="14" :icon="nextIcon || FIconChevronRight" />
    </button>

    <!-- 快速跳转搜索框 -->
    <template v-if="jumpSearch">
      <f-input
        v-model="jumpCurrent"
        placeholder="输入跳转的页数"
        class="f-pagination__jump"
        style="width: 80px"
        :disabled
        :on-blur="handleInput"
        :on-enter="handleInput"
      />
    </template>
  </div>
</template>
