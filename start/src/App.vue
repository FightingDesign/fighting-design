<script lang="ts" setup>
  import { ref } from 'vue'

  const visible = ref(false)
</script>

<template>
  <f-button type="primary" @click="visible = true">show</f-button>
  <f-mask v-model:visible="visible">
    <h1>123</h1>
  </f-mask>
</template>

<style scoped></style>
