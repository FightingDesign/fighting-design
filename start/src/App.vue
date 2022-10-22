<script lang="ts" setup>
  import { ref } from 'vue'
  const value1 = ref('22222222')
</script>

<template>
  <f-input
    v-model="value1"
    search
    type="password"
    clear
    show-password
    placeholder="请输入...."
  >
  </f-input>
</template>

<style lang="scss" scoped></style>
