<template>
  <div class="f-image-preview">
    <img class="f-image-showImg" :src="previewList[previewShowIndex]" />

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
      <f-icon size="22px" icon="f-icon-xuanzhuan-1" @click="turnRight" />
      <f-icon size="22px" icon="f-icon-xuanzhuan-2" @click="turnRight" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { Props } from './PreviewList'
  import { ref, computed } from 'vue'
  import type { Ref } from 'vue'
  import type { optionInterface } from '@fighting-design/fighting-type'

  const prop = defineProps(Props)
  const emit = defineEmits(['close'])

  const previewShowIndex: Ref<number> = ref<number>(prop.previewShowIndex)

  const close: optionInterface = (): void => {
    emit('close', false)
  }

  const prev: optionInterface = (): void => {
    if (previewShowIndex.value > 0) {
      previewShowIndex.value--
      return
    }
    previewShowIndex.value = prop.previewList.length - 1
  }

  const next: optionInterface = (): void => {
    if (previewShowIndex.value < prop.previewList.length - 1) {
      previewShowIndex.value++
      return
    }
    previewShowIndex.value = 0
  }

  const small: optionInterface = (): void => {
    console.log('Small')
  }

  const big: optionInterface = (): void => {
    console.log('big')
  }

  const turnLeft: optionInterface = (): void => {
    console.log('turnLeft')
  }

  const turnRight: optionInterface = (): void => {
    console.log('turnRight')
  }
</script>
