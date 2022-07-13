<template>
  <f-text>普通文字</f-text>
  <f-text type="primary">主要文字</f-text>
  <f-text type="success">成功文字</f-text>
  <f-text type="danger">危险文字</f-text>
  <f-text type="warning">警告文字</f-text>

  <br />

  <f-alert title="标题" type="default">默认提示信息</f-alert>
  <f-alert title="标题" type="primary">主要提示信息</f-alert>
  <f-alert title="标题" type="success">成功提示信息</f-alert>
  <f-alert title="标题" type="danger">危险提示信息</f-alert>
  <f-alert title="标题" type="warning">警告提示信息</f-alert>

  <br />

  <f-alert close type="default">默认提示信息</f-alert>
  <f-alert close type="primary">主要提示信息</f-alert>
  <f-alert close type="success">成功提示信息</f-alert>
  <f-alert close type="danger">危险提示信息</f-alert>
  <f-alert close type="warning">警告提示信息</f-alert>

  <br />

  <f-alert simple type="default">默认提示信息</f-alert>
  <f-alert simple type="primary">主要提示信息</f-alert>
  <f-alert simple type="success">成功提示信息</f-alert>
  <f-alert simple type="danger">危险提示信息</f-alert>
  <f-alert simple type="warning">警告提示信息</f-alert>
</template>

<script setup>
  import { ref } from 'vue'

  const show = ref(false)
  const visible1 = ref(false)
</script>

<style scoped></style>
