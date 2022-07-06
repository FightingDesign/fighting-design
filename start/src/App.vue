<template>
  <br />
  <br />
  <f-tooltip content="这是一个提示这是一个提示这是一个提示">
    <f-button>哈哈</f-button>
  </f-tooltip>
</template>

<script setup>
  import { ref } from 'vue'

  const num = ref(98)
</script>

<style scoped>
  .f-tooltip {
    margin-left: 120px;
  }
</style>
