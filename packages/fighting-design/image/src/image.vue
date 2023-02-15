<script lang="ts" setup name="FImage">
  import { Props } from './props'
  import { onMounted, ref, computed } from 'vue'
  import { sizeChange } from '../../_utils'
  import { useLoadImg, useProps } from '../../_hooks'
  import type { CSSProperties } from 'vue'
  import type { ClassList } from '../../_interface'
  import type { UseLoadImgProp } from '../../_hooks'

  const prop = defineProps(Props)

  const { filter } = useProps(prop)

  const { loadImg, isSuccess, isShowNode } = useLoadImg(
    filter(['src', 'errSrc', 'rootMargin', 'lazy', 'onLoad', 'onError']) as unknown as UseLoadImgProp
  )

  /** 元素节点 */
  const imageEl = ref<HTMLImageElement>()

  onMounted((): void => {
    imageEl.value && loadImg(imageEl.value)
  })

  /** 类名列表 */
  const classList = computed((): ClassList => {
    const { fit, noSelect } = prop

    return [
      'f-image__img',
      {
        [`f-image__${fit}`]: fit,
        'f-image__select': noSelect
      }
    ] as const
  })

  /** 样式列表 */
  const styleList = computed((): CSSProperties => {
    const { width, height, round } = prop

    return {
      '--image-width': sizeChange(width),
      '--image-height': sizeChange(height),
      '--image-border-radius': sizeChange(round)
    } as CSSProperties
  })
</script>

<template>
  <div v-if="isSuccess" role="img" :class="['f-image', { 'f-image__block': block }]" :style="styleList">
    <!-- 真正展示的图片 -->
    <img
      ref="imageEl"
      src=""
      :class="classList"
      :style="(styleList, isShowNode ? '' : 'visibility: hidden')"
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
