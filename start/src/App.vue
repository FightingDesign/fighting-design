<script lang="ts" setup>
  import { ref } from 'vue'

  const isOpen = ref(false)
</script>

<template>
  <f-switch v-model="isOpen" />

  <f-collapse-animation :opened="isOpen">
    <p>11111</p>
    <p>11111</p>
    <p>11111</p>
    <p>11111</p>
    <p>11111</p>
    <p>11111</p>
    <p>11111</p>
    <p>11111</p>
    <p>11111</p>
    <p>11111</p>
    <p>222222</p>
  </f-collapse-animation>
</template>
