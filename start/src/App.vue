<script lang="ts" setup>
  import { ref } from 'vue'

  const show1 = ref(false)

  const listImg = [
    'https://tianyuhao.cn/images/auto/1.jpg',
    'https://tianyuhao.cn/images/auto/2.jpg',
    'https://tianyuhao.cn/images/auto/3.jpg',
    'https://tianyuhao.cn/images/auto/4.jpg'
  ]
</script>

<template>
  <f-button type="primary" @click="show1 = true">打开</f-button>
  <f-image-preview v-model:visible="show1" :preview-list="listImg" />
</template>

<style scoped></style>
