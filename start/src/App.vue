<template>
  <br />
  <br />
  <f-badge value="999" :max="100" color="skyblue">
    <f-button @click="num++">default</f-button>
  </f-badge>

  <f-button type="primary" @click="show = true"> click me </f-button>
  <f-dialog height="400px" v-model:visible="show"> </f-dialog>
</template>

<script setup>
  import { ref } from 'vue'

  const num = ref(98)
  const show = ref(false)
</script>

<style scoped>
  .item {
    margin-right: 20px;
  }
</style>
