<template>
  <f-switch
    v-model="value"
    openText="打开"
    closeText="关闭"
    icon="f-icon-default-template"
  />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const value = ref(true)
</script>

<style scoped></style>
