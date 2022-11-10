<script lang="ts" setup>
  import { ref } from 'vue'

  const type = ref('primary')

  const change = (): void => {
    type.value = 'default'
  }
</script>

<template>
  <f-button :type="type" :click="change">主要按钮</f-button>

  <!-- <f-select v-model="value">
    <f-option value="选项1"></f-option>
    <f-option disabled value="选项2"></f-option>
    <f-option value="选项3"></f-option>
    <f-option value="选项4"></f-option>
  </f-select> -->
</template>

<style lang="scss" scoped></style>
