<script lang="ts" setup>
  import { reactive } from 'vue'

  const value = reactive({
    value1: '123',
    value2: '456'
  })
</script>

<template>
  <h1>{{ value }}</h1>
  <input v-model="value.value1" type="text" />
  <input v-model="value.value2" type="text" />
</template>
