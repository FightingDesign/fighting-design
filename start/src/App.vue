<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref(3)
</script>

<template>
  <f-rate v-model="value1" double-clear />
</template>

<style lang="scss" scoped></style>
