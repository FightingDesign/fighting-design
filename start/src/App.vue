<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref(20)
</script>

<template>
  <h1>{{ value1 }}</h1>

  <f-slider v-model="value1" :step="2" background="blue" active-color="green" width="200px" disabled />
</template>

<style></style>
