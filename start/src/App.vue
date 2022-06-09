<template>
  <f-switch v-model="value"></f-switch>

  <f-switch v-model="value" size="middle" inActiveColor="#13ce66"></f-switch>

  <f-switch v-model="value" size="large" inActiveColor="#13ce66"></f-switch>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref(true)
</script>

<style scoped>
</style>
