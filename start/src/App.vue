<script lang="ts" setup></script>

<template>
  <f-watermark content="机密文件">
    <div id="box">
      <f-button type="default">默认按钮</f-button>
      <f-button type="primary">主要按钮</f-button>
      <f-button type="success">成功按钮</f-button>
      <f-button type="danger">危险按钮</f-button>
      <f-button type="warning">警告按钮</f-button>
    </div>
  </f-watermark>
</template>

<style scoped>
  #box {
    width: 900px;
    height: 700px;
  }
</style>
