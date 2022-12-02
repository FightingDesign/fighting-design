<script lang="ts" setup name="FWatermark">
  import { Props } from './props'
  import { createWatermark } from '../../_utils'
  import { ref, onMounted, computed } from 'vue'
  import { useProps } from '../../_hooks'
  import type { CSSProperties } from 'vue'
  import type { CreateWatermarkPropsInterface } from '../../_utils/create-watermark/interface'

  const prop = defineProps(Props)

  const { filter } = useProps(prop)

  // 水印样式列表
  const watermarkStyleList = ref<CSSProperties>(
    null as unknown as CSSProperties
  )

  /**
   * 文字水印
   */
  const baseWatermark = computed((): CSSProperties => {
    /**
     * base 64 图片格式
     */
    const watermark: string = createWatermark(
      filter([
        'content',
        'width',
        'height',
        'fontSize',
        'fontColor'
      ]) as unknown as CreateWatermarkPropsInterface
    )

    return {
      backgroundImage: `url(${watermark})`
    } as CSSProperties
  })

  /**
   * 图片水印
   */
  const imageWatermark = computed((): CSSProperties => {
    const { image, width, height } = prop

    return {
      backgroundImage: `url(${image})`,
      backgroundSize: `${width}px ${height}px`
    } as CSSProperties
  })

  onMounted((): void => {
    watermarkStyleList.value = prop.image
      ? imageWatermark.value
      : baseWatermark.value
  })
</script>

<template>
  <div
    :class="['f-watermark', { 'f-watermark__block': block }]"
    :style="[watermarkStyleList, { zIndex }]"
  >
    <slot />
  </div>
</template>
