<template>
  <div :class="['f-image', { 'f-image-block': block }]">
    <img
      ref="FImageImg"
      :class="[
        'f-image-img',
        `f-image-${fit}`,
        {
          'f-image-select': select
        }
      ]"
      src=""
      :style="{ width, height }"
      :draggable="draggable"
      :alt="alt"
    />
  </div>
</template>

<script lang="ts" setup>
import { Props, Emits } from './image'
import { onMounted, ref } from 'vue'
import { loadImage } from '@fighting-design/fighting-utils'
import type { Ref } from 'vue'

const prop = defineProps(Props)
const emit = defineEmits(Emits)

const FImageImg: Ref<HTMLImageElement | null> = ref<HTMLImageElement | null>(
  null
)

onMounted((): void => {
  const node: HTMLImageElement = FImageImg.value!
  loadImage(node, prop, emit)
})
</script>

<script lang="ts">
export default {
  name: 'FImage'
}
</script>
