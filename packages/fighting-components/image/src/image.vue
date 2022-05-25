<template>
  <div :class="['f-image', { 'f-image-block': block }]" @click="onClick">
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
      :referrer-policy="referrerPolicy"
      :alt="alt"
    />

    <component v-show="isPreviewListShow" :is="PreviewList" />
  </div>
</template>

<script lang="ts" setup>
import { Props, Emits } from './image'
import { onMounted, ref, defineAsyncComponent, computed } from 'vue'
import { loadImage } from '@fighting-design/fighting-utils'
import type { Ref, ComputedRef } from 'vue'

const prop = defineProps(Props)
const emit = defineEmits(Emits)

const FImageImg: Ref<HTMLImageElement | null> = ref<HTMLImageElement | null>(
  null
)
const isPreviewListShow: Ref<boolean> = ref<boolean>(false)

const PreviewList: ComputedRef<Object | null> = computed((): Object | null => {
  if (prop.previewList && prop.previewList.length) {
    return defineAsyncComponent(() => import('./PreviewList.vue'))
  }
  return null
})

const onClick = (): void => {
  isPreviewListShow.value = true
}

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
