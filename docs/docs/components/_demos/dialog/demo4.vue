<script setup lang="ts">
  import { ref } from 'vue'

  const visible4 = ref(false)
</script>

<template>
  <f-button type="primary" @click="visible4 = true">show</f-button>

  <f-dialog v-model:visible="visible4" title="Title" modal-blur>
    fighting-design
  </f-dialog>
</template>
