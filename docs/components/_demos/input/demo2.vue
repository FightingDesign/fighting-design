<script lang="ts" setup>
  import { ref } from 'vue'

  const value4 = ref('不同类型的')
</script>

<template>
  <f-input v-model="value4" type="text" />
  <f-input v-model="value4" type="password" />
</template>

<style lang="scss" scoped>
  .f-input {
    margin-top: 10px;
  }
</style>
