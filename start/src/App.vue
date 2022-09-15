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
  <!-- <f-button type="primary" @click="show1 = true">打开</f-button> -->
  <f-image-preview v-model:visible="show1" :preview-list="listImg" />
  <f-image
    round="30px"
    caption="漂亮的玫瑰花漂亮的玫瑰花漂亮的玫瑰花漂亮的玫瑰花漂亮的玫瑰花漂亮的玫瑰花漂亮的玫瑰花漂亮的玫瑰花漂亮的玫瑰花漂亮的玫瑰花漂亮的玫瑰花漂亮的玫瑰花漂亮的玫瑰花漂亮的玫瑰花漂亮的玫瑰花漂亮的玫瑰花漂亮的玫瑰花漂亮的玫瑰花漂亮的玫瑰花"
    src="https://tianyuhao.cn/images/auto/4.jpg"
  />
  <img src="https://tianyuhao.cn/images/auto/4.jpg" alt="">
</template>

<style scoped></style>
