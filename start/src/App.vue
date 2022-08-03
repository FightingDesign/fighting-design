<script lang="ts" setup></script>

<template>
  <f-watermark content="机密文件" :height="100" :width="130">
    <f-card title="绝对机密">
      <f-avatar round src="https://tianyuhao.cn/images/my.jpg" />
      <f-text block>这是一个重要的文件</f-text>
    </f-card>
  </f-watermark>

  <f-watermark
    content="机密文件"
    :height="100"
    :width="130"
    font-color="red"
    font-size="16px"
  >
    <f-card title="绝对机密">
      <f-avatar round src="https://tianyuhao.cn/images/my.jpg" />
      <f-text block>这是一个重要的文件</f-text>
    </f-card>
  </f-watermark>
</template>

<style scoped>
  .f-watermark {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
  }
  .f-card {
    width: 240px;
  }
</style>
