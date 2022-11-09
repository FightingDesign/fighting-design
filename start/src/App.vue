<script setup lang="ts">
  import { ref } from 'vue'

  const value = ref('1')
</script>

<template>
  <f-dropdown>
    <f-button type="primary">下拉菜单</f-button>

    <template #content>
      <f-dropdown-item>猕猴桃</f-dropdown-item>
      <f-dropdown-item>哈密瓜</f-dropdown-item>
      <f-dropdown-item>火龙果</f-dropdown-item>
      <f-dropdown-item>柠檬</f-dropdown-item>
    </template>
  </f-dropdown>

  <f-textarea v-model="value"></f-textarea>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>
