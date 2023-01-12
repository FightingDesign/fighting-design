<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref(true)
</script>

<template>
  <f-switch v-model="value1" />

  <f-fighting-global type="primary">
    <f-button type="default">默认按钮</f-button>
    <f-button type="primary">主要按钮</f-button>
    <f-button type="success">成功按钮</f-button>
    <f-button type="danger">危险按钮</f-button>
    <f-button type="warning">警告按钮</f-button>
  </f-fighting-global>
</template>

<style lang="scss" scoped></style>
