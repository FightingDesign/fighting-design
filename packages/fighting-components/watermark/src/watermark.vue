<script lang="ts" setup name="FWatermark">
  import { Props } from './watermark'
  import { Watermark } from '@fighting-design/fighting-utils'
  import { computed } from 'vue'
  import type { ComputedRef, CSSProperties } from 'vue'

  const prop = defineProps(Props)

  const baseWatermark: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
      const { content, width, height, fontSize, fontColor } = prop
      let base64 = ''
      const watermark: Watermark = new Watermark(
        content,
        width,
        height,
        fontSize,
        fontColor
      )

      base64 = watermark.createBase64()

      return {
        backgroundImage: `url(${base64})`
      }
    }
  )

  const imageWatermark: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
      const { image, width, height } = prop

      return {
        backgroundImage: `url(${image})`,
        backgroundSize: `${width}px ${height}px`
      }
    }
  )

  const watermarkStyleList: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
      return prop.image ? imageWatermark.value : baseWatermark.value
    }
  )
</script>

<template>
  <div
    :class="['f-watermark', { 'f-watermark-block': block }]"
    :style="[watermarkStyleList, { zIndex }]"
  >
    <slot />
  </div>
</template>
