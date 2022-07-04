<template>
  <f-button type="primary" @click="change">主要按钮</f-button>
  <f-dialog title="Title" :visible="isShow">哈哈哈哈</f-dialog>
</template>

<script setup>
  import { ref } from 'vue'
  const isShow = ref(false)

  function change() {
    isShow.value = true
  }
</script>
