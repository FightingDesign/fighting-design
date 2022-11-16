<script lang="ts" setup name="FPagination">
  import { Props } from './props'
  import { computed, ref } from 'vue'
  import { FIconChevronLeftVue, FIconChevronRightVue } from '../../_svg'
  import { FInput } from '../../input'
  import { FSelect } from '../../select'
  import { FOption } from '../../option'
  import { FSvgIcon } from '../../svg-icon'
  import type { ComputedRef, Ref } from 'vue'
  import type { PaginationPropsType } from './props'
  import type { ClassListInterface } from '../../_interface'

  const prop: PaginationPropsType = defineProps(Props)
  const emit = defineEmits({
    'update:current': (current: number): boolean => typeof current === 'number',
    'update:pageSize': (pageSize: number): boolean =>
      typeof pageSize === 'number'
  })

  // 当前快速跳转的页码
  const jumpCurrent: Ref<string> = ref('1')

  const pagesLen: Ref<number> = ref(10)

  /**
   * 计算出最大页码数
   */
  const maxCount: ComputedRef<number> = computed((): number => {
    const page1: number = Math.floor(prop.total / prop.pageSize)
    const model: number = prop.total % prop.pageSize

    return model === 0 ? page1 : page1 + 1
  })

  /**
   * 计算出上一页按钮的样式
   */
  const prevClass: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      const { background, round, disabled } = prop
      return [
        'f-pagination__prev',
        { 'f-pagination__btn-background': background },
        { 'f-pagination__btn-circle': round },
        { 'f-pagination__disabled': disabled }
      ]
    }
  )

  /**
   * ul的计算样式
   */
  const listClass: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      const { background, round } = prop
      return [
        'f-pagination__pages',
        { 'f-pagination__state': background || round }
      ]
    }
  )

  /**
   * 下一页按钮的计算样式
   */
  const nextClass: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      const { background, round, disabled } = prop
      return [
        'f-pagination__next',
        { 'f-pagination__btn-background': background },
        { 'f-pagination__btn-circle': round },
        { 'f-pagination__disabled': disabled }
      ]
    }
  )

  /**
   * 计算出需要循环遍历的 pages
   */
  const pages: ComputedRef<number[]> = computed((): number[] =>
    [...Array(maxCount.value).keys()].map((item: number) => item + 1)
  )

  /**
   * 点击上一页触发的回调
   */
  const toPrev = (): void => {
    if (prop.disabled) return
    const newCurrent = prop.current === 1 ? 1 : prop.current - 1
    emit('update:current', newCurrent)
    prop.prevClick(newCurrent, prop.pageSize)
  }

  /**
   * 点击下一页触发的回调
   */
  const toNext = (): void => {
    if (prop.disabled) return
    const newCurrent: number =
      prop.current === maxCount.value ? maxCount.value : prop.current + 1
    emit('update:current', newCurrent)

    prop.nextClick(newCurrent, prop.pageSize)
  }

  /**
   * 点击指定页面的回调
   */
  const change = (newCurrent: number): void => {
    if (prop.disabled) return
    emit('update:current', newCurrent)
    prop.change(newCurrent, prop.pageSize)
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
      ></f-option>
    </f-select>

    <button :class="prevClass" @click="toPrev">
      <f-svg-icon :size="15" :icon="prevIcon">
        <f-icon-chevron-left-vue />
      </f-svg-icon>
    </button>

    <!-- 分页主内容 -->
    <ul v-if="prop.total > 0" :class="listClass">
      <li
        v-for="item in pages"
        :key="item"
        :class="[
          'f-pagination__pages-li',
          { 'f-pagination__pages-li-choose': current === item },
          {
            'f-pagination__pages-li-background-choose':
              current === item && background
          },
          { 'f-pagination__background': background },
          { 'f-pagination__circle': round },
          {
            'f-pagination__disabled f-pagination__pages-li-disabled': disabled
          }
        ]"
        @click="change(item)"
      >
        <span>{{ item }}</span>
      </li>
    </ul>

    <!-- 右侧侧切换按钮 -->
    <button :class="nextClass" @click="toNext">
      <f-svg-icon :size="15" :icon="nextIcon">
        <f-icon-chevron-right-vue />
      </f-svg-icon>
    </button>

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
