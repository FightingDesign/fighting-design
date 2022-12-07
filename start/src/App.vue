<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref(50)
</script>

<template>
  <f-slider v-model="value1" />
</template>
