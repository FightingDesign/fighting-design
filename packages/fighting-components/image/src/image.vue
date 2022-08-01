<script lang="ts" setup name="FImage">
  import PreviewList from './PreviewList.vue'
  import { Props, Emits } from './image'
  import { onMounted, ref } from 'vue'
  import { loadImage } from '@fighting-design/fighting-utils'
  import type { Ref } from 'vue'
  import type { callbackInterface } from './interface'
  import type { ordinaryFunctionInterface } from '../../button/src/interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const isError: Ref<boolean> = ref<boolean>(true)
  const isLoadOk: Ref<boolean> = ref<boolean>(false)
  const isPreviewListShow: Ref<boolean> = ref<boolean>(false)
  const captionWidth: Ref<number> = ref<number>(0)
  const FImageImg: Ref<HTMLImageElement> = ref<HTMLImageElement>(
    null as unknown as HTMLImageElement
  )

  const handleClick: ordinaryFunctionInterface = (): void => {
    if (prop.previewList && prop.previewList.length) {
      isPreviewListShow.value = true
    }
  }

  const handleClose: ordinaryFunctionInterface = (): void => {
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
      @click="handleClick"
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

    <!-- 后续改为依赖注入 -->
    <preview-list
      v-if="prop.previewList && prop.previewList.length"
      v-show="isPreviewListShow"
      :preview-list="previewList"
      :preview-show-index="previewShowIndex"
      :preview-show-option="previewShowOption"
      :preview-z-index="previewZIndex"
      :modal-close="modalClose"
      :show-close-btn="showCloseBtn"
      :preview-round="previewRound"
      :width="width"
      @close="handleClose"
    />
  </div>

  <div v-else class="f-image-error">
    <slot name="error">
      <span class="f-image-error-text">{{ alt || '加载失败' }}</span>
    </slot>
  </div>
</template>
