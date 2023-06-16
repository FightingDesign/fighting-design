<script setup lang="ts">
  import { ref } from 'vue'

  const visible1 = ref(false)
</script>

<template>
  <f-button type="primary" @click="visible1 = true">打开</f-button>

  <f-dialog v-model:visible="visible1" title="标题文字" :mask-close="false" mask-background="red" :z-index="5000" :mask-opacity="1">
    这是一个 Dialog

    <template #footer>
      <f-button type="default">默认按钮</f-button>
      <f-button type="primary">主要按钮</f-button>
    </template>
  </f-dialog>
</template>
