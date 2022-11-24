<script lang="ts" setup name="FExpandCard">
  import { Props } from './props'
  import { computed, ref } from 'vue'
  import { sizeChange, isString } from '../../_utils'
  import type { Ref, ComputedRef, CSSProperties } from 'vue'
  import type { ClassListInterface } from '../../_interface'
  import type {
    ExpandCardSwitchExpandCardInterface,
    ExpandCardImageListItemInterface,
    ExpandCardPropsType,
    ExpandCardActiveClassInterface
  } from './interface'

  const prop: ExpandCardPropsType = defineProps(Props)

  /**
   * 当前显示的位置
   */
  const currExpandIndex: Ref<number> = ref<number>(prop.expandIndex)

  /**
   * 切换卡片
   */
  const switchExpandCard: ExpandCardSwitchExpandCardInterface = (
    index: number
  ): void => {
    currExpandIndex.value = index
  }

  /**
   * 展开的类名
   *
   * @param index 索引
   */
  const activeClass: ExpandCardActiveClassInterface = (
    index: number
  ): string | void => {
    if (index !== currExpandIndex.value) return
    return 'f-expand-card__active'
  }

  /**
   * 类名列表
   */
  const classList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      const { round } = prop

      return ['f-expand-card__item', { 'f-expand-card__round': round }] as const
    }
  )

  /**
   * 将传入的 imageList 改变成指定的类型进行渲染
   */
  const imageListArr: ComputedRef<ExpandCardImageListItemInterface[]> =
    computed((): ExpandCardImageListItemInterface[] => {
      const { imageList } = prop

      return imageList.map(
        (
          item: string | ExpandCardImageListItemInterface
        ): ExpandCardImageListItemInterface => {
          if (isString(item)) {
            return { url: item } as ExpandCardImageListItemInterface
          }
          return item as ExpandCardImageListItemInterface
        }
      )
    })

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { width, height } = prop

    return {
      width: sizeChange(width),
      height: sizeChange(height)
    } as const
  })
</script>

<template>
  <div class="f-expand-card" :style="styleList">
    <div
      v-for="(item, index) in imageListArr"
      :key="index"
      :class="[activeClass(index), ...classList]"
      :style="{ backgroundImage: `url(${item.url})` }"
      @click="switchExpandCard(index)"
    >
      <h3 v-if="item.text" class="f-expand-card__title" :style="{ color }">
        {{ item.text }}
      </h3>
    </div>
  </div>
</template>
