<script lang="ts" setup>
  import { ref } from 'vue'

  const value3 = ref(2)
</script>

<template>
  <f-rate v-model="value3" text-show icon="f-icon-atm-fill" />
</template>

<style lang="scss" scoped></style>
