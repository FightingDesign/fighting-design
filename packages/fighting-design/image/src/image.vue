<script lang="ts" setup name="FImage">
  import { Props } from './props'
  import { onMounted, ref, watch } from 'vue'
  import { useLoadImg, useProps, useList } from '../../_hooks'
  import type { UseLoadImgProp } from '../../_hooks'

  const prop = defineProps(Props)

  const { filter } = useProps(prop)
  const { classes, styles } = useList(prop, 'image')
  const { startLoad, isSuccess, isShowNode } = useLoadImg(
    filter([
      'src',
      'errSrc',
      'rootMargin',
      'lazy',
      'onLoad',
      'onError'
    ]) as unknown as UseLoadImgProp
  )

  /** 元素节点 */
  const imageEl = ref<HTMLImageElement>()

  /** 加载 */
  const load = (): void => {
    imageEl.value && startLoad(imageEl.value)
  }

  onMounted((): void => {
    load()
  })

  /** 监视 src 的变化重新加载图片 */
  watch(
    (): string => prop.src,
    (): void => {
      load()
    }
  )

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
