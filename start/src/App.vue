<template>
  <f-link type="primary" href="https://www.baidu.com" target="_top"
    >默认按钮</f-link
  >

  <a href="https://www.baidu.com" target="_blank">大撒大</a>

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
