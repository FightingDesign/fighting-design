<template>
  <f-image
    width="200px"
    src="https://tianyuhao.cn/images/auto/12.png"
    err-src="https://tianyuhao.cn/images/auto/33.png"
  />

  <!--  :preview-list="listImg" -->
</template>

<script lang="ts" setup>
  const listImg = [
    'https://tianyuhao.cn/images/auto/1.png',
    'https://tianyuhao.cn/images/auto/2.png',
    'https://tianyuhao.cn/images/auto/3.png'
  ]
</script>

<style scoped>
  .box {
    height: 2000px;
  }
</style>
