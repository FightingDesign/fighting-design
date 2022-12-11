<script lang="ts" setup name="FExpandCard">
  import { Props } from './props'
  import { computed, ref } from 'vue'
  import { sizeChange, isString, isArray } from '../../_utils'
  import type { CSSProperties } from 'vue'
  import type { ClassList } from '../../_interface'
  import type { ExpandCardImageListItem } from './interface'

  const prop = defineProps(Props)

  /**
   * 当前显示的位置
   */
  const currExpandIndex = ref<number>(prop.expandIndex)

  /**
   * 切换卡片
   *
   * @param index 索引
   */
  const switchExpandCard = (index: number): void => {
    currExpandIndex.value = index
  }

  /**
   * 展开的类名
   *
   * @param index 索引
   */
  const activeClass = (index: number): string | void => {
    if (index !== currExpandIndex.value) return
    return 'f-expand-card__active'
  }

  /**
   * 类名列表
   */
  const classList = computed((): ClassList => {
    const { round } = prop

    return ['f-expand-card__item', { 'f-expand-card__round': round }] as const
  })

  /**
   * 将传入的 imageList 改变成指定的类型进行渲染
   */
  const imageListArr = computed((): ExpandCardImageListItem[] => {
    const { imageList } = prop

    if (!imageList && !isArray(imageList)) {
      return []
    }

    return imageList.map(
      (item: string | ExpandCardImageListItem): ExpandCardImageListItem => {
        if (isString(item)) {
          return { url: item }
        }
        return item
      }
    )
  })

  /**
   * 样式列表
   */
  const styleList = computed((): CSSProperties => {
    const { width, height } = prop

    return {
      width: sizeChange(width),
      height: sizeChange(height)
    } as const
  })
</script>

<template>
  <div v-if="imageListArr.length" class="f-expand-card" :style="styleList">
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
