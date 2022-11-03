<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref('')
</script>

<template>
  <f-input v-model="value1" type="text" placeholder="请输入...." />
  <f-alert title="admin" close>hi啊hi啊hi身上</f-alert>
</template>

<style lang="scss" scoped></style>
