<script lang="ts" setup>
  // import { ref } from 'vue'

  // const change = (e: Event): void => console.log(e, 'change')
  // const input = (e: Event): void => console.log(e, 'input')
  // const blur = (e: Event): void => console.log(e, 'blur')
  // const focus = (e: Event): void => console.log(e, 'focus')

  // const change = (e) => console.log(e, 'change')
  // const open = (e) => console.log(e, 'open')
  // const close = (e) => console.log(e, 'close')

  // const value1 = ref('')
  // const date = new Date()
</script>

<template>
  <!-- <f-calendar v-model:date="date" lunar />
  <f-date-picker v-model:date="value1" clear format="YYYY年MM月DD日" />
  <f-date-picker v-model:date="value1" /> -->

  <f-trigger trigger="click" :enter-duration="0.4" :leave-duration="0.4">
    <f-text type="primary">click 触发</f-text>

    <template #content>
      <f-empty content="在这里，后续提供更多服务" />
    </template>
  </f-trigger>
  <!-- 
  <f-dropdown trigger="click">
    <f-link type="primary">click下拉菜单ck下拉菜单ck下拉菜单ck下拉菜单</f-link>

    <template #content>
      <f-dropdown-item>猕猴桃</f-dropdown-item>
      <f-dropdown-item>哈密瓜</f-dropdown-item>
      <f-dropdown-item>火龙果</f-dropdown-item>
      <f-dropdown-item>柠檬</f-dropdown-item>
    </template>
  </f-dropdown>

  <f-dropdown trigger="hover">
    <f-button type="primary">hover下拉菜单</f-button>

    <template #content>
      <f-dropdown-item>猕猴桃</f-dropdown-item>
      <f-dropdown-item>哈密瓜</f-dropdown-item>
      <f-dropdown-item>火龙果</f-dropdown-item>
      <f-dropdown-item>柠檬</f-dropdown-item>
    </template>
  </f-dropdown> -->
</template>
