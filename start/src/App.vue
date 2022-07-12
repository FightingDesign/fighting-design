<template>
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
