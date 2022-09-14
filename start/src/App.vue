<script lang="ts" setup>
  import { ref } from 'vue'

  const show = ref(false)

  const listImg = [
    'https://tianyuhao.cn/images/auto/1.jpg',
    'https://tianyuhao.cn/images/auto/2.jpg',
    'https://tianyuhao.cn/images/auto/3.jpg',
    'https://tianyuhao.cn/images/auto/4.jpg'
  ]
</script>

<template>
  <f-button type="primary" @click="show = true">打开</f-button>
  <f-image-preview v-model:visible="show" :preview-list="listImg" />
</template>

<style lang="scss" scoped></style>
