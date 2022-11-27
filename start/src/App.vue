<script lang="ts" setup>
  import { ref } from 'vue'
  const current = ref(1)
</script>

<template>
  <f-pagination v-model:current="current" :page-size="10" :total="100" />
</template>

<style lang="scss" scoped></style>
