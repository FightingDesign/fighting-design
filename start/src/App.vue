<script setup lang="ts">
  import { ref } from 'vue'

  const visible1 = ref(true)
</script>

<template>
  <f-button type="primary" @click="visible1 = true">打开</f-button>

  <f-dialog v-model:visible="visible1" title="Title">
    fighting-design
    <template #footer> 12121 </template>
  </f-dialog>
</template>
