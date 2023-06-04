<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref('')
</script>

<template>
  {{ value1 }}
  <f-date-picker v-model:date="value1" />
</template>
