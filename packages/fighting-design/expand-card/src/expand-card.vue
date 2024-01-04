<script lang="ts" setup>
  import { Props } from './props'
  import { computed, ref } from 'vue'
  import { isString, isArray, warning, isObject } from '../../_utils'
  import { useList, useRun } from '../../_hooks'
  import type { ExpandCardImageListItem } from './interface'

  defineOptions({ name: 'FExpandCard' })

  const prop = defineProps(Props)

  const { classes, styles } = useList(prop, 'expand-card')
  const { run } = useRun()

  /** 当前显示的位置 */
  const currExpandIndex = ref<number>(prop.expandIndex)

  /**
   * 切换卡片
   *
   * @param { Object } evt 事件对象
   * @param { number } index 索引
   * @param { Object } item 每一项信息
   */
  const handelClick = (
    evt: MouseEvent,
    index: number,
    item: ExpandCardImageListItem
  ): void => {
    currExpandIndex.value = index

    /**
     * 点击执行 onChange 方法
     *
     * 返回时间对象、当前点击的索引、每一项信息
     */
    run(prop.onChange, evt, index, item)
  }

  /** 将传入的 imageList 改变成指定的类型进行渲染 */
  const imageListArr = computed((): ExpandCardImageListItem[] => {
    const { imageList } = prop

    // 提前检测数据结构是否正确
    if (!isArray(imageList)) {
      warning('f-expand-card', '`image-list` is not a array.')

      // 不正确返回空数组
      return []
    }

    /**
     * 格式化数组，将数组转换为指定的格式
     *
     * @see Array.prototype.map() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map
     */
    return imageList.map(
      (item: string | ExpandCardImageListItem): ExpandCardImageListItem => {
        // 如果每一项是字符串，则代表图片地址
        if (isString(item)) {
          return { url: item }
        }

        // 如果是对象，必须内部带有图片地址
        if (isObject(item) && item.url) {
          return item
        }

        // 否则返回空地址的对象
        return { url: '' }
      }
    )
  })

  /** 类名列表 */
  const classList = classes(['round', 'vertical'], 'f-expand-card')

  /** 样式列表 */
  const style = styles(['width', 'height', 'color'])
</script>

<template>
  <div v-if="imageListArr.length" :class="classList" :style>
    <div
      v-for="(item, index) in imageListArr"
      :key="index"
      :class="[
        'f-expand-card__item',
        { 'f-expand-card__active': index === currExpandIndex }
      ]"
      :style="{ backgroundImage: `url(${item.url})` }"
      @click="handelClick($event, index, item)"
    >
      <div v-if="item.text" class="f-expand-card__title">
        {{ item.text }}
      </div>
    </div>
  </div>
</template>
