<template>
  <br />
  <br />
  <f-badge value="999" :max="100" color="skyblue">
    <f-button @click="num++">default</f-button>
  </f-badge>
</template>

<script setup>
  import { ref } from 'vue'

  const num = ref(98)
</script>

<style scoped>
  .item {
    margin-right: 20px;
  }
</style>
