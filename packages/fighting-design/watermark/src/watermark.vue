<script lang="ts" setup>
  import { Props } from './props'
  import { ref, onMounted, computed } from 'vue'
  import { useCanvas } from '../../_hooks'
  import type { CSSProperties, Ref } from 'vue'

  defineOptions({ name: 'FWatermark' })

  const prop = defineProps(Props)

  /** 水印样式列表 */
  const style: Ref<CSSProperties> = ref({})

  /** 文字水印 */
  const baseWatermark = computed((): CSSProperties => {
    const image = useCanvas(prop).create()

    return { backgroundImage: `url(${image})` }
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
  <div
    :class="['f-watermark', { 'f-watermark__block': block }]"
    :style="[style, { zIndex }]"
  >
    <slot />
  </div>
</template>
