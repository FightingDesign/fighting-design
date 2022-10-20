<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref('')
</script>

<template>
  <f-input v-model="value" type="text" />
</template>

<style lang="scss" scoped></style>
