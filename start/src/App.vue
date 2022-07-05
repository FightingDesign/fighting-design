<template>
  <!-- <f-tooltip content="hello">
    <f-button type="primary">主要按钮</f-button>
  </f-tooltip> -->

  <f-button type="primary" @click="change">主要按钮</f-button>
  <f-dialog
    title="Title"
    v-model:visible="isShow"
    @open="open"
    @open-end="openEnd"
    @close="close"
    @close-end="closeEnd"
  >
    哈哈哈哈
  </f-dialog>
</template>

<script setup>
  import { ref } from 'vue'
  const isShow = ref(false)
  const change = () => {
    isShow.value = true
  }

  const open = () => {
    console.log('open')
  }

  const openEnd = () => {
    console.log('openEnd')
  }

  const close = () => {
    console.log('close')
  }

  const closeEnd = () => {
    console.log('closeEnd')
  }
</script>

<style></style>
