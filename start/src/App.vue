<script lang="ts" setup>
  const onLoad = (e) => {
    console.log('成功了')
  }
  const onError = (e) => {
    console.log('失败了')
  }
</script>

<template>
  <f-image
    width="200px"
    src="https://tianyuhao.cn/images/auto/21.jpg"
    err-src="https://tianyuhao.cn/images/auto/21.jpg"
    :load="onLoad"
    :error="onError"
  />
</template>

<style lang="scss" scoped></style>
