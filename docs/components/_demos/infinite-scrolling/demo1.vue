<script lang="ts" setup>
  import { ref } from 'vue'

  const length = ref(20)

  const onScrollEnd = (): void => {
    length.value += 10
  }
</script>

<template>
  <f-infinite-scrolling :on-scroll-end="onScrollEnd">
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
