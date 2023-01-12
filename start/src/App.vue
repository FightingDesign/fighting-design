<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref(true)
</script>

<template>
  <f-switch v-model="value1" />

  <f-fighting-global type="primary">
    <f-alert type="default">默认按钮</f-alert>
    <f-alert type="primary">主要按钮</f-alert>
    <f-alert type="success">成功按钮</f-alert>
    <f-alert type="danger">危险按钮</f-alert>
    <f-alert type="warning">警告按钮</f-alert>
  </f-fighting-global>
</template>

<style lang="scss" scoped></style>
