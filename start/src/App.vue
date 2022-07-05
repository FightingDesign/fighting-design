<template>
  <!-- <f-tooltip content="hello">
    <f-button type="primary">主要按钮</f-button>
  </f-tooltip> -->

  <!-- <f-button type="primary" @click="change">主要按钮</f-button>
  <f-dialog
    title="Title"
    v-model:visible="isShow"
    @open="open"
    @open-end="openEnd"
    @close="close"
    @close-end="closeEnd"
  >
    哈哈哈哈
    <f-button type="primary" @click="isShow2 = true">主要按钮</f-button>
    <f-dialog title="Title2" v-model:visible="isShow2" top="10vh" width="500px">
      第二层
    </f-dialog>
  </f-dialog> -->
  <f-progress type="default" :percentage="40" />
  <f-progress type="primary" :percentage="10" />
  <f-progress type="success" :percentage="40" />
  <f-progress type="danger" :percentage="70" />
  <f-progress type="warning" :percentage="100" />
</template>

<script setup>
  import { ref } from 'vue'
  const isShow = ref(true)
  const isShow2 = ref(false)
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
