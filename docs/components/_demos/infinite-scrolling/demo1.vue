<script lang="ts" setup>
  import { ref } from 'vue'
  const length = ref(20)
  const scrollView = (): void => {
    length.value += 10
  }
</script>

<template>
  <f-infinite-scrolling :is-loading="false" @scroll-view="scrollView">
    <div v-for="item in length" :key="item" class="item" style="">{{ item }}</div>
  </f-infinite-scrolling>
</template>

<style>
  .item {
    width: 100%;
    height: 40px;
    background: var(--vp-c-brand);
    margin: 5px 0;
    text-align: center;
    line-height: 40px;
  }
</style>
