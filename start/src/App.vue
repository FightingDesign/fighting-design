<template>
  <f-button @click="show = true">打开</f-button>
  <f-drawer v-model:visible="show" title="Title"> hello </f-drawer>
</template>

<script setup>
  import { ref } from 'vue'

  const show = ref(false)

  const sun = () => {
    if (num1.value > 0) {
      num1.value -= 10
    }
  }

  const add = () => {
    if (num1.value < 100) {
      num1.value += 10
    }
  }
</script>

<style scoped></style>
