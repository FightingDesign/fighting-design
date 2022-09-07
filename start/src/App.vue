<script lang="ts" setup>
  import { ref } from 'vue'

  const loading1 = ref(true)

  function onclick1 () {
    loading1.value = true
    setTimeout(() => {
      loading1.value = false
    }, 1500)
  }
</script>

<template>
  <f-button type="primary" @click="onclick1">开始 loading</f-button>
  <f-loading :show="loading1" />
</template>
