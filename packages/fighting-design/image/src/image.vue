<script lang="ts" setup name="FImage">
  import { Props } from './props'
  import { ref } from 'vue'
  import { useLoadImg, useList } from '../../_hooks'

  const prop = defineProps(Props)

  /** 元素节点 */
  const imageEl = ref<HTMLImageElement | undefined>()

  const { classes, styles } = useList(prop, 'image')
  const { isSuccess, isShowNode } = useLoadImg(imageEl, prop)

  /** 类名列表 */
  const classList = classes(['fit', 'select', 'block'], 'f-image')

  /** 样式列表 */
  const styleList = styles(['width', 'height', 'round'])
</script>

<template>
  <div v-if="isSuccess" role="img" :class="classList" :style="styleList">
    <!-- 真正展示的图片 -->
    <img
      ref="imageEl"
      class="f-image__img"
      src=""
      :style="isShowNode ? '' : 'visibility: hidden'"
      :draggable="draggable"
      :referrer-policy="referrerPolicy"
      :alt="alt"
      :title="title"
    />
  </div>

  <div v-else class="f-image__error">
    <slot name="error">
      <span class="f-image__error-text">{{ alt || '加载失败' }}</span>
    </slot>
  </div>
</template>
