<script lang="ts" setup name="FWatermark">
  import { Props } from './props'
  import { createWatermark } from '../../_utils'
  import { ref, onMounted, computed } from 'vue'
  import { useProps } from '../../_hooks'
  import type { Ref, CSSProperties, ComputedRef } from 'vue'
  import type { WatermarkPropsType } from './props'
  import type { CreateWatermarkPropsInterface } from '../../_utils/create-watermark/interface'

  const prop: WatermarkPropsType = defineProps(Props)

  const { filter } = useProps(prop)

  // 水印样式列表
  const watermarkStyleList: Ref<CSSProperties> = ref<CSSProperties>(
    null as unknown as CSSProperties
  )

  /**
   * 文字水印
   */
  const baseWatermark: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
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
    }
  )

  /**
   * 图片水印
   */
  const imageWatermark: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
      const { image, width, height } = prop

      return {
        backgroundImage: `url(${image})`,
        backgroundSize: `${width}px ${height}px`
      } as CSSProperties
    }
  )

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
