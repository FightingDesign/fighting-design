<script setup lang="ts">
  import { ref } from 'vue'

  const visible2 = ref(false)
  const innerVisible = ref(false)
</script>

<template>
  <f-button type="primary" @click="visible2 = true">打开</f-button>

  <f-dialog v-model:visible="visible2" width="500px" title="Title">
    <f-button @click="innerVisible = true">打开里层</f-button>

    <f-dialog v-model:visible="innerVisible" width="300px" title="Title" append-to-body>
      inner dialog
    </f-dialog>
  </f-dialog>
</template>
