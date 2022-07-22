<script lang="ts" setup></script>

<template>
  <f-avatar :size="40" text="你好" src="https://tianyuhao.cn/images/my.jpg" />
  <f-avatar size="large" src="https://tianyuhao.cn/images/my.jpg" />
  <f-avatar size="middle" src="https://tianyuhao.cn/images/my.jpg" />
  <f-avatar size="small" src="https://tianyuhao.cn/images/my.jpg" />
  <f-avatar size="mini" src="https://tianyuhao.cn/images/my.jpg" />

  <br />
  <br />

  <f-tag text simple type="default">默认</f-tag>
  <f-tag text simple type="primary">普通</f-tag>
  <f-tag text simple type="warning">警告</f-tag>
  <f-tag text simple type="success">成功</f-tag>
  <f-tag text simple type="danger">失败</f-tag>
  <br />
  <br />
  <br />
  <f-space>
    <f-tag type="default">默认</f-tag>
    <f-tag type="primary">普通</f-tag>
    <f-tag type="warning">警告</f-tag>
    <f-tag type="success">成功</f-tag>
    <f-tag type="danger">失败</f-tag>
  </f-space>
</template>

<style scoped></style>
