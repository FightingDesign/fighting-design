<template>
  <f-button type="primary" @click="visible1 = true">show</f-button>
  <f-dialog title="Title" v-model:visible="visible1">
    fighting-design
  </f-dialog>

  <f-button @click="show = true">打开</f-button>
  <f-drawer v-model:visible="show" title="Title"> hello </f-drawer>

  <br />
  <f-space spacing="large">
    <f-button type="primary">主要按钮</f-button>
    <f-button type="success">成功按钮</f-button>
    <f-button type="primary">主要按钮</f-button>
    <f-button type="success">成功按钮</f-button>
    <f-button type="warning">警告按钮</f-button>
    <f-button type="primary">主要按钮</f-button>
    <f-button type="primary">主要按钮</f-button>
  </f-space>
</template>

<script setup>
  import { ref } from 'vue'

  const show = ref(false)
  const visible1 = ref(false)
</script>

<style scoped></style>
