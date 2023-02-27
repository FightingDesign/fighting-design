<script lang="ts" setup>
  const imageList = [
    {
      url: 'https://tianyuhao.cn/images/fighting-design/1.jpg',
      text: '122222222222223'
    },
    'https://tianyuhao.cn/images/fighting-design/2.jpg',
    'https://tianyuhao.cn/images/fighting-design/2.jpg',
    'https://tianyuhao.cn/images/fighting-design/2.jpg',
    'https://tianyuhao.cn/images/fighting-design/3.jpg'
  ]

  const change = (evt, index, item): void => {
    console.log(evt, index, item)
  }
</script>

<template>
  <f-expand-card round :image-list="imageList" :on-change="change" />
</template>
