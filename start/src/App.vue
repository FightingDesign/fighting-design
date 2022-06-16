<template>
  <f-switch v-model="value1" disabled />
  <f-switch v-model="value2" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const value1 = ref(true)
  const value2 = ref(false)
</script>
