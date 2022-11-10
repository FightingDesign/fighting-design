<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref('')

  function change (e) {
    console.log(e)
  }
</script>

<template>
  <f-input
    v-model="value"
    type="text"
    placeholder="请输入...."
    :on-change="change"
  />

  <f-select v-model="value">
    <f-option value="选项1"></f-option>
    <f-option value="选项2"></f-option>
    <f-option value="选项3"></f-option>
    <f-option value="选项4"></f-option>
  </f-select>
</template>

<style lang="scss" scoped></style>
