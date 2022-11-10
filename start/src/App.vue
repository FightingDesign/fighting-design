<script setup lang="ts">
  import { ref } from 'vue'

  const value7 = ref('可清空的')

  const value = ref('1')
</script>

<template>
  <f-button type="primary" font-color="red">下拉菜单</f-button>
  <f-dropdown>
    <f-button type="primary">下拉菜单</f-button>

    <template #content>
      <f-dropdown-item>猕猴桃</f-dropdown-item>
      <f-dropdown-item>哈密瓜</f-dropdown-item>
      <f-dropdown-item>火龙果</f-dropdown-item>
      <f-dropdown-item>柠檬</f-dropdown-item>
    </template>
  </f-dropdown>

  <f-textarea v-model="value" resize="horizontal" clear />

  <f-input v-model="value7" type="text" clear />
</template>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>
