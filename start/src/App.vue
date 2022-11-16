<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref('')
</script>

<template>
  <f-dropdown disabled>
    <f-button type="primary">下拉菜单</f-button>

    <template #content>
      <f-dropdown-item>猕猴桃</f-dropdown-item>
      <f-dropdown-item>哈密瓜</f-dropdown-item>
      <f-dropdown-item>火龙果</f-dropdown-item>
      <f-dropdown-item>柠檬</f-dropdown-item>
    </template>
  </f-dropdown>
</template>
