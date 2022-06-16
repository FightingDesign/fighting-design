<template>
  <f-switch v-model="value7" close-text="关闭" open-text="开启" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const value7 = ref(true)
</script>

<style scoped></style>
