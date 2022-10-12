<script setup lang="ts">
  import { ref } from 'vue'

  const visible3 = ref(false)

  const close = (): void => {
    console.log('关闭之前')
  }

  const closeEnd = (): void => {
    console.log('关闭之后')
  }
</script>

<template>
  <f-button type="primary" @click="visible3 = true">打开</f-button>

  <f-dialog
    v-model:visible="visible3"
    title="Title"
    @close="close"
    @close-end="closeEnd"
  >
    fighting-design
  </f-dialog>
</template>
