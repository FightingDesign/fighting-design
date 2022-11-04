<script lang="ts" setup name="FWatermark">
  import { Props } from './props'
  import { createWatermark } from '../../_utils'
  import { ref, onMounted } from 'vue'
  import { useFilterProps } from '../../_hooks'
  import type { Ref, CSSProperties } from 'vue'
  import type { WatermarkPropsType } from './props'
  import type { WatermarkCSSPropertiesInterface } from './interface'
  import type { CreateWatermarkPropsInterface } from '../../_utils/create-watermark/interface'

  const prop: WatermarkPropsType = defineProps(Props)

  const watermarkStyleList: Ref<CSSProperties> = ref<CSSProperties>(
    null as unknown as CSSProperties
  )

  const baseWatermark: WatermarkCSSPropertiesInterface = (): CSSProperties => {
    const needProps: CreateWatermarkPropsInterface = useFilterProps<
      WatermarkPropsType,
      CreateWatermarkPropsInterface
    >(prop, ['content', 'width', 'height', 'fontSize', 'fontColor'])

    const watermark: string = createWatermark(needProps)

    return {
      backgroundImage: `url(${watermark})`
    } as CSSProperties
  }

  const imageWatermark: WatermarkCSSPropertiesInterface = (): CSSProperties => {
    const { image, width, height } = prop

    return {
      backgroundImage: `url(${image})`,
      backgroundSize: `${width}px ${height}px`
    } as CSSProperties
  }

  onMounted((): void => {
    watermarkStyleList.value = prop.image ? imageWatermark() : baseWatermark()
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
