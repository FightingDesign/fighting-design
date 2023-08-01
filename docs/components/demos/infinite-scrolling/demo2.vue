<script lang="ts" setup>
  import { ref } from 'vue'

  const length = ref(10)
  const loading = ref(false)

  const onScrollEnd = (): void => {
    loading.value = true

    setTimeout(() => {
      length.value += 10
      loading.value = false
    }, 2000)
  }
</script>

<template>
  <f-infinite-scrolling :loading="loading" :on-scroll-end="onScrollEnd">
    <div v-for="item in length" :key="item" class="item" style="">{{ item }}</div>
  </f-infinite-scrolling>
</template>

<style scoped>
  .item {
    width: 100%;
    height: 40px;
    background: #96acf8;
    color: #fff;
    margin: 5px 0;
    text-align: center;
    line-height: 40px;
  }
</style>
