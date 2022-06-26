<template>
  <f-button type="primary" @click="onclick">主要按钮</f-button>
  <f-loading :show="loading1" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const loading1 = ref(false)

  function onclick() {
    loading1.value = true
    setTimeout(() => {
      loading1.value = false
    }, 1500)
  }
</script>

<style>
  .a {
    height: 2000px;
  }
</style>
