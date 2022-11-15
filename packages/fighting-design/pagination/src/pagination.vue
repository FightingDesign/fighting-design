<script lang="ts" setup name="FPagination">
  import { Props } from './props'
  import { Emits } from './props'
  import { computed, ref } from 'vue'
  import {
    FIconChevronLeftVue as FIconChevronLeft,
    FIconChevronRightVue as FIconChevronRight
  } from '../../_svg'
  import FInput from '../../input'
  import FSelect from '../../select'
  import FOptions from '../../option'
  import { FSvgIcon } from '../../svg-icon'
  import type { ComputedRef, Ref } from 'vue'
  import type { InputChangeInterface } from '../../input/src/interface'
  import type { PaginationPropsType } from './props'

  const prop: PaginationPropsType = defineProps(Props)

  const emit = defineEmits(Emits)

  // 当前快速跳转的页码
  const jumpCurrent: Ref<number> = ref(1)

  // 计算出最大页码数
  const maxCount: ComputedRef<number> = computed<number>((): number => {
    const page1 = Math.floor(prop.total / prop.pageSize)
    const model = prop.total % prop.pageSize
    if (model === 0) {
      return page1
    }
    return page1 + 1
  })

  // 计算出需要循环遍历的pages
  const pages: ComputedRef<number[]> = computed<number[]>(() =>
    [...Array(maxCount.value).keys()].map((item: number) => item + 1)
  )

  // 点击上一页触发的回调
  const toPrev = (): void => {
    if (prop.disabled) {
      return
    }
    const newCurrent = prop.current === 1 ? 1 : prop.current - 1
    prop.prevClick(newCurrent, prop.pageSize)
  }

  // 点击下一页触发的回调
  const toNext = (): void => {
    if (prop.disabled) {
      return
    }
    const newCurrent =
      prop.current === maxCount.value ? maxCount.value : prop.current + 1

    prop.nextClick(newCurrent, prop.pageSize)
  }

  // 点击指定页面的回调
  const change = (newCurrent: number): void => {
    if (prop.disabled) {
      return
    }
    emit('update:current', newCurrent)
    prop.change(newCurrent, prop.pageSize)
  }

  // 快速跳转至某一页chang回调
  const jumpChange: InputChangeInterface = (currentValue: string): void => {
    if (prop.disabled) {
      return
    }
    jumpCurrent.value = Number(currentValue)
  }

  // 快速跳转框确定值的行为目前设定为:失焦或enter确定
  const jumpHandleValue = (): void => {
    if (prop.disabled) {
      return
    }
    emit('update:current', jumpCurrent.value)
  }
</script>

<template>
  <div class="f-pagination">
    <f-select
      v-if="pageSizes && pageSizes.length"
      :width="60"
      :model-value="String(pageSize)"
      @update:model-value="
        (newPages) => emit('update:pageSize', Number(newPages))
      "
    >
      <f-options
        v-for="item in pageSizes"
        :key="item"
        :value="item"
        :label="item + '/页'"
      ></f-options>
    </f-select>

    <button
      :class="[
        'f-pagination__prev',
        { 'f-pagination__btn__background': background },
        { 'f-pagination__btn__circle': round },
        { 'f-pagination__disabled': disabled }
      ]"
    >
      <f-svg-icon :size="15" :icon="prevIcon" @click="toPrev">
        <f-icon-chevron-left />
      </f-svg-icon>
    </button>
    <ul
      v-if="prop.total > 0"
      :class="[
        'f-pagination__pages',
        { 'f-pagination__state': background || round }
      ]"
    >
      <li
        v-for="item in pages"
        :key="item"
        :class="[
          'f-pagination__pages__li',
          { 'f-pagination__pages__li__choose': current === item },
          {
            'f-pagination__pages__li__background__choose':
              current === item && background
          },
          { 'f-pagination__background': background },
          { 'f-pagination__circle': round },
          {
            'f-pagination__disabled f-pagination__pages__li__disabled': disabled
          }
        ]"
        @click="change(item)"
      >
        <span>{{ item }}</span>
      </li>
    </ul>
    <button
      :class="[
        'f-pagination__next',
        { 'f-pagination__btn__background': background },
        { 'f-pagination__btn__circle': round },
        { 'f-pagination__disabled': disabled }
      ]"
    >
      <f-svg-icon :size="15" :icon="nextIcon" @click="toNext">
        <f-icon-chevron-right />
      </f-svg-icon>
    </button>

    <f-input
      v-if="jumpSearch"
      placeholder="输入跳转的页数"
      class="f-pagination__jump"
      :on-change="jumpChange"
      :on-blur="jumpHandleValue"
      :on-enter="jumpHandleValue"
      :disabled="disabled"
    />
  </div>
</template>
