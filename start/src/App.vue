<template>
  <f-button size="large" type="primary">主要按钮</f-button>
  <f-button type="success">成功按钮</f-button>
  <f-button size="small" type="danger">危险按钮</f-button>
  <f-button size="mini" type="warning">警告按钮</f-button>

  <f-image
    width="200px"
    src="https://tianyuhao.cn/images/auto/1.png"
    :preview-list="listImg"
  />
</template>

<script lang="ts" setup>
  const listImg = [
    'https://tianyuhao.cn/images/auto/1.png',
    'https://tianyuhao.cn/images/auto/2.png',
    'https://tianyuhao.cn/images/auto/3.png'
  ]
</script>

<style scoped></style>
