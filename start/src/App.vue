<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref(true)
</script>

<template>
  <f-switch v-model="value1" />

  <f-fighting-global type="primary" :size="value1 ? 'mini' : 'large'">
    <f-tag background="red">默认</f-tag>
    <f-tag>默认</f-tag>
    <f-tag>默认</f-tag>
  </f-fighting-global>
</template>

<style lang="scss" scoped></style>
