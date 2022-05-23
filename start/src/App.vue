<template>
  <f-button
    leftIcon="f-icon-all-fill1"
    rightIcon="f-icon-all-fill1"
    iconPosition="right"
    type="primary"
    :loading="loading"
  >
    默认按钮
  </f-button>

  <button @click="change">ada</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
interface funInterface {
  (a: number, b: number): number
}
const loading = ref(true)

function change() {
  loading.value = !loading.value
}
const fun: funInterface = (a: number, b: number): number => {
  return a + b
}
</script>

<style scoped></style>
