<template>
  <div :class="['f-image', { 'f-image-block': block }]">
    <img
      ref="FImageImg"
      src=""
      :class="[
        'f-image-img',
        `f-image-${fit}`,
        {
          'f-image-select': select,
          'f-image-pointer': previewList && previewList.length
        }
      ]"
      :style="{ width, height, borderRadius: round }"
      :draggable="draggable"
      :referrer-policy="referrerPolicy"
      :alt="alt"
      @click="onClick"
    />

    <div
      v-if="caption"
      class="f-image-caption"
      :style="{
        color: captionColor,
        borderBottomLeftRadius: round,
        borderBottomRightRadius: round
      }"
    >
      {{ caption }}
    </div>

    <component
      v-show="isPreviewListShow"
      :is="PreviewList"
      :previewList="previewList"
      :previewShowIndex="previewShowIndex"
      :previewShowOption="previewShowOption"
      :previewZIndex="previewZIndex"
      @close="onClose"
    />
  </div>
</template>

<script lang="ts" setup>
  import { Props, Emits } from './image'
  import { onMounted, ref, defineAsyncComponent, computed } from 'vue'
  import { loadImage } from '@fighting-design/fighting-utils'
  import type { Ref, ComputedRef } from 'vue'
  import type {
    FImageOnClickInterface,
    onCloseInterface
  } from '@fighting-design/fighting-type'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const FImageImg: Ref<HTMLImageElement | null> = ref<HTMLImageElement | null>(
    null
  )
  const isPreviewListShow: Ref<boolean> = ref<boolean>(false)

  const PreviewList: ComputedRef<Object | null> = computed(
    (): Object | null => {
      if (prop.previewList && prop.previewList.length) {
        return defineAsyncComponent(() => import('./PreviewList.vue'))
      }
      return null
    }
  )

  const onClick: FImageOnClickInterface = (): void => {
    isPreviewListShow.value = true
  }

  const onClose: onCloseInterface = (params: boolean): void => {
    isPreviewListShow.value = params
  }

  onMounted((): void => {
    const node: HTMLImageElement = FImageImg.value as HTMLImageElement
    loadImage(node, prop, emit)
  })
</script>

<script lang="ts">
  export default {
    name: 'FImage'
  }
</script>
