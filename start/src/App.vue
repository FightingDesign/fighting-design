<template>
  <f-button :ripples="false" type="default">默认按钮</f-button>
  <f-button :ripples="false" type="primary">主要按钮</f-button>
  <f-button :ripples="false" type="success">成功按钮</f-button>
  <f-button :ripples="false" type="danger">危险按钮</f-button>
  <f-button :ripples="false" type="warning">警告按钮</f-button>
  <br />
  <f-button simple :ripples="false" type="default">默认按钮</f-button>
  <f-button simple :ripples="false" type="primary">主要按钮</f-button>
  <f-button simple :ripples="false" type="success">成功按钮</f-button>
  <f-button simple :ripples="false" type="danger">危险按钮</f-button>
  <f-button simple :ripples="false" type="warning">警告按钮</f-button>
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
