<script lang="ts" setup name="FExpandCard">
  import { Props } from './props'
  import { computed, ref } from 'vue'
  import { isString, isArray } from '../../_utils'
  import { useList } from '../../_hooks'
  import type { ExpandCardImageListItem } from './interface'

  const prop = defineProps(Props)

  const { classes, styles } = useList(prop, 'expand-card')

  /** 当前显示的位置 */
  const currExpandIndex = ref<number>(prop.expandIndex)

  /**
   * 切换卡片
   *
   * @param { number } index 索引
   */
  const switchExpandCard = (index: number): void => {
    currExpandIndex.value = index
  }

  /**
   * 展开的类名
   *
   * @param { number } index 索引
   */
  const activeClass = (index: number): string | void => {
    if (index !== currExpandIndex.value) return
    return 'f-expand-card__active'
  }

  /** 将传入的 imageList 改变成指定的类型进行渲染 */
  const imageListArr = computed((): ExpandCardImageListItem[] => {
    const { imageList } = prop

    if (!imageList && !isArray(imageList)) return []

    /**
     * @see Array.prototype.map() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map
     */
    return imageList.map((item: string | ExpandCardImageListItem): ExpandCardImageListItem => {
      if (isString(item)) {
        return { url: item }
      }
      return item
    })
  })

  /** 类名列表 */
  const classList = classes(['round'], 'f-expand-card__item')

  /** 样式列表 */
  const styleList = styles(['width', 'height'])
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
