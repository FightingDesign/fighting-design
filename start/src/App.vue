<script lang="ts" setup>
  import { ref } from 'vue'
  const loading = ref(false)

  const change = (): void => {
    loading.value = true

    setTimeout(() => {
      loading.value = false
    }, 2000)
  }
</script>

<template>
  <f-button :click="change">开始</f-button>
  <div v-loading="loading" class="box"></div>
</template>

<style lang="scss" scoped>
  .box {
    width: 300px;
    height: 200px;
    margin: auto;
    border: 1px solid red;
  }
</style>
