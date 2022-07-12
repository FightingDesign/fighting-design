<template>
  <f-button type="default">默认按钮</f-button>
  <f-button type="primary">主要按钮</f-button>
  <f-button type="success">成功按钮</f-button>
  <f-button type="danger">危险按钮</f-button>
  <f-button type="warning">警告按钮</f-button>
  <br />
  <f-button simple type="default">默认按钮</f-button>
  <f-button simple type="primary">主要按钮</f-button>
  <f-button simple type="success">成功按钮</f-button>
  <f-button simple type="danger">危险按钮</f-button>
  <f-button simple type="warning">警告按钮</f-button>
  <br />
  <f-button text type="default">默认按钮</f-button>
  <f-button text type="primary">主要按钮</f-button>
  <f-button text type="success">成功按钮</f-button>
  <f-button text type="danger">危险按钮</f-button>
  <f-button text type="warning">警告按钮</f-button>
</template>

<script setup>
  import { ref } from 'vue'

  const show = ref(false)
  const visible1 = ref(false)
</script>

<style scoped></style>
