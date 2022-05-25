<template>
  <div class="f-image-preview">
    <h1>预览图</h1>
    <f-button @click="onClose">关闭</f-button>
    <f-button @click="nextImage">下一张</f-button>

    <img :src="previewList[previewShowIndex]" width="300" alt="" />
  </div>
</template>

<script lang="ts" setup>
import { Props } from './PreviewList'
import { ref } from 'vue'

const prop = defineProps(Props)
const emit = defineEmits(['close'])

const onClose = (): void => {
  emit('close', false)
}

const previewShowIndex = ref(prop.previewShowIndex)

const nextImage = () => {
  if (previewShowIndex.value < prop.previewList.length - 1) {
    previewShowIndex.value++
    return
  }
  previewShowIndex.value = 0
}
</script>
