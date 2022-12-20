<script lang="ts" setup>
  import { reactive } from 'vue'

  const value = reactive({
    value1: true,
    value2: false
  })
</script>

<template>
  <f-switch v-model="value.value1" />
  <f-switch v-model="value.value2" />
</template>
