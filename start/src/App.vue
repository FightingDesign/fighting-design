<template>
  <f-switch v-model="value" icon="f-icon-Daytimemode"></f-switch>

  <f-switch
    v-model="value"
    size="middle"
    active-text="按月付费"
    inactive-text="按年付费"
    active-color="#13ce66"
    inactive-color="#ff4949"
  ></f-switch>

  <f-switch
    v-model="value"
    square
    size="large"
    disabled
    icon="f-icon-Daytimemode"
  ></f-switch>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref(true)
</script>

<style scoped></style>
