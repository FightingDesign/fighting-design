<template>
  <div v-if="isError" :class="['f-image', { 'f-image-block': block }]">
    <img
      ref="FImageImg"
      src=""
      :class="[
        'f-image-img',
        {
          [`f-image-${fit}`]: fit,
          'f-image-select': noSelect,
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
      v-show="isLoadOk"
      class="f-image-caption"
      :style="{
        width: width || `${captionWidth}px`,
        color: captionColor,
        borderBottomLeftRadius: round,
        borderBottomRightRadius: round
      }"
    >
      {{ caption }}
    </div>

    <PreviewList
      v-if="prop.previewList && prop.previewList.length"
      v-show="isPreviewListShow"
      :previewList="previewList"
      :previewShowIndex="previewShowIndex"
      :previewShowOption="previewShowOption"
      :previewZIndex="previewZIndex"
      :modalClose="modalClose"
      :showCloseBtn="showCloseBtn"
      :previewRound="previewRound"
      :width="width"
      @close="onClose"
    />
  </div>

  <div v-else class="f-image-error">
    <slot name="error">
      <span class="f-image-error-text">{{ alt || '加载失败' }}</span>
    </slot>
  </div>
</template>

<script lang="ts" setup name="FImage">
  import { Props, Emits } from './image'
  import { onMounted, ref } from 'vue'
  import { loadImage } from '@fighting-design/fighting-utils'
  import type { Ref } from 'vue'
  import type {
    ordinaryFunctionInterface,
    callbackInterface
  } from './interface'
  import PreviewList from './PreviewList.vue'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const isError: Ref<boolean> = ref<boolean>(true)
  const isLoadOk: Ref<boolean> = ref<boolean>(false)
  const isPreviewListShow: Ref<boolean> = ref<boolean>(false)
  const captionWidth: Ref<number> = ref<number>(0)
  const FImageImg: Ref<HTMLImageElement | null> = ref<HTMLImageElement | null>(
    null
  )

  const onClick: ordinaryFunctionInterface = (): void => {
    if (prop.previewList && prop.previewList.length) {
      isPreviewListShow.value = true
    }
  }

  const onClose: ordinaryFunctionInterface = (): void => {
    isPreviewListShow.value = false
  }

  onMounted((): void => {
    const node: HTMLImageElement = FImageImg.value as HTMLImageElement
    const callback: callbackInterface = (
      params: boolean,
      width: number
    ): void => {
      isError.value = params
      isLoadOk.value = params
      captionWidth.value = width
    }

    loadImage(node, prop, emit, callback)
  })
</script>
