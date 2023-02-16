<script lang="ts" setup name="FWatermark">
  import { Props } from './props'
  import { ref, onMounted, computed } from 'vue'
  import { useProps, useCanvas } from '../../_hooks'
  import type { CSSProperties, Ref } from 'vue'
  import type { CreateWatermarkProps } from '../../_hooks'

  const prop = defineProps(Props)

  const { filter } = useProps(prop)

  /** 水印样式列表 */
  const style: Ref<CSSProperties> = ref({})

  /** 文字水印 */
  const baseWatermark = computed((): CSSProperties => {
    /** base 64 图片格式 */
    const watermark: string = useCanvas().createWatermark(
      filter(['content', 'width', 'height', 'fontSize', 'fontColor']) as unknown as CreateWatermarkProps
    )

    return { backgroundImage: `url(${watermark})` }
  })

  /** 图片水印 */
  const imageWatermark = computed((): CSSProperties => {
    const { image, width, height } = prop

    return {
      backgroundImage: `url(${image})`,
      backgroundSize: `${width}px ${height}px`
    }
  })

  /** 初始化的时候设置水印样式 */
  onMounted((): void => {
    style.value = prop.image ? imageWatermark.value : baseWatermark.value
  })
</script>

<template>
  <div :class="['f-watermark', { 'f-watermark__block': block }]" :style="[style, { zIndex }]">
    <slot />
  </div>
</template>
