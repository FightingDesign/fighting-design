<template>
  <div class="f-image-preview" :style="{ zIndex: previewZIndex }">
    <img
      class="f-image-showImg"
      :src="previewList[previewShowIndex]"
      :style="{ transform: `scale(${scale}) rotate(${rotate}deg)` }"
    />

    <div class="right_button">
      <f-icon size="22px" icon="f-icon-arrow-right" @click="next" />
    </div>
    <div class="left_button">
      <f-icon size="22px" icon="f-icon-arrow-left" @click="prev" />
    </div>
    <div class="close_button">
      <f-icon size="16px" icon="f-icon-close" @click="close" />
    </div>

    <div v-if="previewShowOption" class="option">
      <f-icon size="22px" icon="f-icon-suoxiao" @click="small" />
      <f-icon size="22px" icon="f-icon-fangda" @click="big" />
      <f-icon size="22px" icon="f-icon-column1" @click="recovery" />
      <f-icon size="22px" icon="f-icon-xuanzhuan-1" @click="turnLeft" />
      <f-icon size="22px" icon="f-icon-xuanzhuan-2" @click="turnRight" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import type { Ref } from 'vue'
  import { Props } from './PreviewList'
  import type { optionInterface } from '@fighting-design/fighting-type'
  import {
    scale,
    rotate,
    small,
    big,
    turnLeft,
    turnRight,
    recovery
  } from '@fighting-design/fighting-utils'

  const prop = defineProps(Props)
  const emit = defineEmits(['close'])

  const previewShowIndex: Ref<number> = ref<number>(prop.previewShowIndex)

  const imagPreload = (): void => {
    const imgList = prop.previewList
    imgList.map((item: string) => {
      const img: HTMLImageElement = new Image() as HTMLImageElement
      img.src = item
    })
  }
  imagPreload()

  const close: optionInterface = (): void => {
    emit('close', false)
  }

  const next: optionInterface = (): void => {
    recovery()
    if (previewShowIndex.value < prop.previewList.length - 1) {
      previewShowIndex.value++
      return
    }
    previewShowIndex.value = 0
  }

  const prev: optionInterface = (): void => {
    recovery()
    if (previewShowIndex.value > 0) {
      previewShowIndex.value--
      return
    }
    previewShowIndex.value = prop.previewList.length - 1
  }
</script>
