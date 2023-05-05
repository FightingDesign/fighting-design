<script setup lang="ts">
  import { ref } from 'vue'

  const visible1 = ref(true)

  const handleOpen = el => console.log(el)
</script>

<template>
  <f-button type="primary" @click="visible1 = true">打开</f-button>

  <!-- fullscreen -->
  <f-dialog
    v-model:visible="visible1"
    title="标题文字"
    width="500px"
    :on-open="handleOpen"
  >
    这是一个 Dialog
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>

    <template #footer>
      <f-button type="default">默认按钮</f-button>
      <f-button type="primary">主要按钮</f-button>
    </template>
  </f-dialog>
</template>
