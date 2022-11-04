<script lang="ts" setup>
  import { ref } from 'vue'
  import type { Ref } from 'vue'

  const files: Ref<File[] | null> = ref<File[]>(null as unknown as File[])

  const change = () => {
    console.log(123)
  }

  // https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/drop_event drop 事件在元素或选中的文本被放置在有效的放置目标上时被触发。
  // dragover 当元素或者选择的文本被拖拽到一个有效的放置目标上时，触发 dragover 事件（每几百毫秒触发一次）
  //     @dragleave.prevent="dragover = false" dragleave 事件在拖动的元素或选中的文本离开一个有效的放置目标时被触发。
</script>

<template>
  <f-button type="default">默认按钮</f-button>
  <f-up-load drag multiple v-model:files="files" :change="change" />
</template>
