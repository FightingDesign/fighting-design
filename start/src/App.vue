<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref(3)
</script>

<template>
  <f-input-number v-model="value1" />
  <f-input-number v-model="value1" model="switch" />
  <f-input-number v-model="value1" model="button" />
</template>
