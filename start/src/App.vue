<script lang="ts" setup>
  import { ref } from 'vue'
  import type { Ref } from 'vue'

  const files: Ref<File[] | null> = ref<File[]>(null as unknown as File[])

  const load = () => {
    console.log(files.value)
  }

  function handFiles(file) {
    console.log(file)
  }

  const dragover = ref(false)

  const onDragover = (e) => {
    // console.log(e)
    // e.preventDefault() // 阻止默认事件
    // e.stopPropagation()
    if (!dragover) {
      console.log(e)
    }
    dragover.value = true
  }

  const onDrop = (e) => {
    // e.preventDefault() // 阻止默认事件
    // e.stopPropagation() // 阻止事件冒泡
    dragover.value = false
    // console.log(e)

    const file = e.dataTransfer.files
    console.log(e)
  }

  // https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/drop_event drop 事件在元素或选中的文本被放置在有效的放置目标上时被触发。
  // dragover 当元素或者选择的文本被拖拽到一个有效的放置目标上时，触发 dragover 事件（每几百毫秒触发一次）
  //     @dragleave.prevent="dragover = false" dragleave 事件在拖动的元素或选中的文本离开一个有效的放置目标时被触发。
</script>

<template>
  <f-up-load drag multiple v-model:files="files" :load="load" :max-length="2" />

  <div class="file" @drop.prevent="onDrop" @dragover.prevent="onDragover"></div>
</template>

<style lang="scss" scoped>
  .file {
    width: 200px;
    height: 200px;
    display: inline-block;
    background-color: red;
  }
</style>
