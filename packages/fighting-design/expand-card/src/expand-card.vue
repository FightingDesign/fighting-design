<script lang="ts" setup name="FExpandCard">
  import { Props } from './props'
  import { computed, ref } from 'vue'
  import { isString, isArray, warning } from '../../_utils'
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

  /** 将传入的 imageList 改变成指定的类型进行渲染 */
  const imageListArr = computed((): ExpandCardImageListItem[] => {
    const { imageList } = prop

    /** 提前检测数据结构是否正确 */
    if (!imageList || !imageList.length || !isArray(imageList)) {
      if (__DEV__) {
        warning('f-expand-card', '`image-list` is not a array.')
      }

      /** 不正确返回空数组 */
      return []
    }

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
  const classList = classes(['round', 'vertical'], 'f-expand-card')

  /** 样式列表 */
  const styleList = styles(['width', 'height', 'color'])
</script>

<template>
  <div v-if="imageListArr.length" :class="classList" :style="styleList">
    <div
      v-for="(item, index) in imageListArr"
      :key="index"
      :class="['f-expand-card__item', { 'f-expand-card__active': index === currExpandIndex }]"
      :style="{ backgroundImage: `url(${item.url})` }"
      @click="switchExpandCard(index)"
    >
      <h3 v-if="item.text" class="f-expand-card__title" :style="{ color }">
        {{ item.text }}
      </h3>
    </div>
  </div>
</template>
