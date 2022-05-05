<template>
  <f-button type="primary" @click="change">主要按钮</f-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isLoading = ref(false)
function change(e: Event) {
  console.log(e)
}
</script>

<style scoped>
div {
  color: skyblue;
}
</style>
