<script lang="ts" setup>
  import { ref } from 'vue'
  const value1 = ref('22222222')
</script>

<template>
  <f-input
    v-for="(item, i) in ['large', 'middle', 'small', 'mini']"
    :key="i"
    v-model="value1"
    search
    :size="item"
    clear
    show-password
    placeholder="请输入...."
  />
</template>

<style lang="scss" scoped></style>
