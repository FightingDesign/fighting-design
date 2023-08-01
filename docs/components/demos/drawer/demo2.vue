<script lang="ts" setup>
  import { ref } from 'vue'

  const visible4 = ref(false)
  const visible5 = ref(false)
</script>

<template>
  <f-button type="primary" @click="visible4 = true">打开</f-button>

  <f-drawer v-model:visible="visible4" title="Title" size="50%" append-to-body>
    <f-button type="primary" @click="visible5 = true">打开内层 drawer</f-button>
    <f-drawer v-model:visible="visible5" title="Title"> 内层 drawer </f-drawer>
  </f-drawer>
</template>
