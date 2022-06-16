<template>
  <f-switch v-model="value1" />
  <f-switch v-model="value1" />
  <f-switch v-model="value1" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const value1 = ref(true)
  const value2 = ref(false)
</script>
