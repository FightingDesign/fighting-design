<template>
  <f-button type="default">默认按钮</f-button>
  <f-button type="primary">主要按钮</f-button>
  <f-button type="success">成功按钮</f-button>
  <f-button type="danger">危险按钮</f-button>
  <f-button type="warning">警告按钮</f-button>
  <f-button type="info">信息按钮</f-button>
  <br />
  <f-button simple type="default">默认按钮</f-button>
  <f-button simple type="">主要按钮</f-button>
  <f-button simple type="success">成功按钮</f-button>
  <f-button simple type="danger">危险按钮</f-button>
  <f-button simple type="warning">警告按钮</f-button>
  <f-button simple type="info">信息按钮</f-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const isLoading = ref(false)
function change() {
  isLoading.value = !isLoading.value
}
</script>

<style scoped>
div {
  color: skyblue;
}
</style>
