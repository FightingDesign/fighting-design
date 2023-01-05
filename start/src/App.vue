<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref(1)
</script>

<template>
  <f-rate v-model="value1" effect-color="red" />
</template>
