<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref('选项1')
</script>

<template>
  <f-select v-model="value">
    <f-option value="选项1"></f-option>
    <f-option disabled value="选项2"></f-option>
    <f-option value="选项3"></f-option>
    <f-option value="选项4"></f-option>
  </f-select>

  <br />

  <f-dropdown trigger="click">
    <f-button type="primary">下拉菜单</f-button>

    <template #content>
      <f-dropdown-item>猕猴桃</f-dropdown-item>
      <f-dropdown-item>哈密瓜</f-dropdown-item>
      <f-dropdown-item>火龙果</f-dropdown-item>
      <f-dropdown-item>柠檬</f-dropdown-item>
    </template>
  </f-dropdown>
</template>

<style lang="scss" scoped></style>
