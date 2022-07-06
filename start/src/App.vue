<template>
  <br />
  <br />
  <f-badge value="999" :max="100" color="skyblue">
    <f-button @click="onClick">default</f-button>
    <f-drawer v-model:visible="onOff"></f-drawer>
  </f-badge>
</template>

<script setup>
  import { ref } from 'vue'

  const onOff = ref(false)

  const onClick = () => {
    onOff.value = !onOff.value
  }
</script>

<style scoped>
  .item {
    margin-right: 20px;
  }
</style>
