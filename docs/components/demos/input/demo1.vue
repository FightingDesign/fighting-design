<script lang="ts" setup>
  import { ref } from 'vue'

  const value2 = ref('不同尺寸的')
</script>

<template>
  <f-input v-model="value2" type="text" size="large" />
  <f-input v-model="value2" type="text" size="middle" />
  <f-input v-model="value2" type="text" size="small" />
  <f-input v-model="value2" type="text" size="mini" />
</template>

<style lang="scss" scoped>
  .f-input {
    margin-top: 10px;
  }
</style>
