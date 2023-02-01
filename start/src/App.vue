<script lang="ts" setup>
  import { ref } from 'vue'

  const value3 = ref(true)
</script>

<template>
  <f-switch v-model="value3" size="large" />
  <f-switch v-model="value3" size="middle" />
  <f-switch v-model="value3" size="small" />
  <f-switch v-model="value3" size="mini" />
</template>
