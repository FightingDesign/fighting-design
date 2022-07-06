<template>
  <br />
  <br />
  <f-tooltip content="这是一个提示这是一个提示这是一个提示">
    <f-button>哈哈</f-button>
  </f-tooltip>
  <f-badge value="999" :max="100" color="skyblue">
    <f-button @click="num++">default</f-button>
  </f-badge>

  <f-button type="primary" @click="show = true"> click me </f-button>
  <f-dialog height="400px" v-model:visible="show"> </f-dialog>
  <f-progress percentage="3" linear height="16px"></f-progress>
</template>

<script setup>
  import { ref } from 'vue'

  const num = ref(98)
  const show = ref(false)
</script>

<style scoped>
  .f-tooltip {
    margin-left: 120px;
  }
</style>
