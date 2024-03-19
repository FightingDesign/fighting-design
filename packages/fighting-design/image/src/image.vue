<script lang="ts" setup>
  import { Props } from './props'
  import { ref } from 'vue'
  import { useLoadImg, useList } from '../../_hooks'

  defineOptions({ name: 'FImage' })

  const prop = defineProps(Props)

  /** 元素节点 */
  const imageEl = ref<HTMLImageElement | undefined>()

  const { classes, styles } = useList(prop, 'image')
  const { isSuccess, isShowNode } = useLoadImg(imageEl, prop)

  /** 类名列表 */
  const classList = classes(['fit', 'select', 'block'], 'f-image')

  /** 样式列表 */
  const style = styles(['width', 'height', 'round'])
</script>

<template>
  <div v-if="isSuccess" role="img" :class="classList" :style>
    <!-- 真正展示的图片 -->
    <img
      ref="imageEl"
      class="f-image__img"
      src=""
      :style="isShowNode ? '' : 'visibility: hidden'"
      :referrer-policy="referrerPolicy"
      :draggable
      :alt
      :title
    />
  </div>

  <div v-else class="f-image__error">
    <slot name="error">
      <div class="f-image__error-text">{{ alt || '加载失败' }}</div>
    </slot>
  </div>
</template>
