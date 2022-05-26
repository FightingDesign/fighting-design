<template>
  <div class="f-image-preview">
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

    <div class="option">
      <f-icon size="22px" icon="f-icon-suoxiao" @click="small" />
      <f-icon size="22px" icon="f-icon-fangda" @click="big" />
      <f-icon size="22px" icon="f-icon-column1" @click="recovery" />
      <f-icon size="22px" icon="f-icon-xuanzhuan-1" @click="turnRight" />
      <f-icon size="22px" icon="f-icon-xuanzhuan-2" @click="turnRight" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { Props } from './PreviewList'
  import { ref } from 'vue'
  import type { Ref } from 'vue'
  import type { optionInterface } from '@fighting-design/fighting-type'

  const prop = defineProps(Props)
  const emit = defineEmits(['close'])

  const previewShowIndex: Ref<number> = ref<number>(prop.previewShowIndex)
  const scale: Ref<number> = ref<number>(1)
  const rotate: Ref<number> = ref<number>(0)

  const close: optionInterface = (): void => {
    emit('close', false)
  }

  const recovery: optionInterface = (): void => {
    scale.value = 1
    rotate.value = 0
  }

  const prev: optionInterface = (): void => {
    recovery()
    if (previewShowIndex.value > 0) {
      previewShowIndex.value--
      return
    }
    previewShowIndex.value = prop.previewList.length - 1
  }

  const next: optionInterface = (): void => {
    recovery()
    if (previewShowIndex.value < prop.previewList.length - 1) {
      previewShowIndex.value++
      return
    }
    previewShowIndex.value = 0
  }

  const small: optionInterface = (): void => {
    scale.value -= 0.2
  }

  const big: optionInterface = (): void => {
    scale.value += 0.2
  }

  const turnLeft: optionInterface = (): void => {
    rotate.value += 90
  }

  const turnRight: optionInterface = (): void => {
    rotate.value -= 90
  }
</script>
