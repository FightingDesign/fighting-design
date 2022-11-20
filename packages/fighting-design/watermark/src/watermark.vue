<script lang="ts" setup name="FWatermark">
  import { Props } from './props'
  import { createWatermark } from '../../_utils'
  import { ref, onMounted, computed } from 'vue'
  import { useFilterProps } from '../../_hooks'
  import type { Ref, CSSProperties, ComputedRef } from 'vue'
  import type { WatermarkPropsType } from './props'
  import type { CreateWatermarkPropsInterface } from '../../_utils/create-watermark/interface'

  const prop: WatermarkPropsType = defineProps(Props)

  // 水印样式列表
  const watermarkStyleList: Ref<CSSProperties> = ref<CSSProperties>(
    null as unknown as CSSProperties
  )

  /**
   * 文字水印
   */
  const baseWatermark: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
      const needProps: CreateWatermarkPropsInterface = useFilterProps<
        WatermarkPropsType,
        CreateWatermarkPropsInterface
      >(prop, ['content', 'width', 'height', 'fontSize', 'fontColor'])

      const watermark: string = createWatermark(needProps)

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
