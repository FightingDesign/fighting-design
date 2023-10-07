<script lang="ts" setup>
  import { ref } from 'vue'

  const value8 = ref('点我试试吧')
</script>

<template>
  <f-input v-model="value8" type="text" readonly />
  <f-input v-model="value8" type="text" disabled />
</template>

<style lang="scss" scoped>
  .f-input {
    margin-top: 10px;
  }
</style>
