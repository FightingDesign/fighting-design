<script lang="ts" setup>
  import { ref } from 'vue'
  const listImg = [
    'https://tianyuhao.cn/images/auto/1.jpg',
    'https://tianyuhao.cn/images/auto/2.jpg',
    'https://tianyuhao.cn/images/auto/3.jpg',
    'https://tianyuhao.cn/images/auto/4.jpg'
  ]

  const isShow = ref(false)
  const Show = (): void => {
    isShow.value = true
    console.log(isShow.value)
  }
</script>

<template>
  <f-button @click="Show">打开</f-button>
  <f-image-preview v-model:visible="isShow" :preview-list="listImg" />
</template>

<style lang="scss" scoped></style>
