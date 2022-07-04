<template>
  <f-tooltip content="hello">
    <f-button type="primary">主要按钮</f-button>
  </f-tooltip>
  <f-button type="primary" @click="change">主要按钮</f-button>
  <f-dialog title="Title" v-model:visible="isShow">哈哈哈哈</f-dialog>
</template>

<script setup>
  import { ref } from 'vue'
  const isShow = ref(false)
  const change = () => {
    isShow.value = true
  }
</script>

<style></style>
