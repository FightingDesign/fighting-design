<script lang="ts" setup>
  // import { ref } from 'vue'
  import { ref } from 'vue'

  const value1 = ref('')

  // const change = (e: Event): void => console.log(e, 'change')
  // const input = (e: Event): void => console.log(e, 'input')
  // const blur = (e: Event): void => console.log(e, 'blur')
  // const focus = (e: Event): void => console.log(e, 'focus')

  const change = (e) => console.log(e, 'change')
  const open = (e) => console.log(e, 'open')
  const close = (e) => console.log(e, 'close')

  // const value1 = ref('')
  // const date = new Date()

  const onClick = () => {
    console.log(123)
  }

  const onClick111 = () => console.log('999')
</script>

<template>
  <!-- <f-calendar v-model:date="date" lunar />
  <f-date-picker v-model:date="value1" clear format="YYYY年MM月DD日" />
  <f-date-picker v-model:date="value1" /> -->
  <!-- <f-input v-model="value1" type="text" placeholder="请输入...." :max-length="10" />

  <f-trigger trigger="click">
    <f-text type="primary">click 触发</f-text>

    <template #content>
      <f-empty content="在这里，后续提供更多服务" />
    </template>
  </f-trigger>

  <f-trigger trigger="hover">
    <f-text type="primary">hover 触发</f-text>

    <template #content>
      <f-empty content="在这里，后续提供更多服务" />
    </template>
  </f-trigger> -->

  <!-- 

    :on-change="change"
    :on-close="close"
    :on-open="open"

   -->
  <f-dropdown trigger="hover">
    <f-button type="primary">下拉菜单</f-button>

    <template #content>
      <f-dropdown-item :on-click="onClick111">1111111111</f-dropdown-item>
      <f-dropdown-item
        v-for="(item, index) in ['猕猴桃', '哈密瓜', '水果']"
        :key="index"
        :on-click="() => onClick(item)"
      >
        {{ item }}
      </f-dropdown-item>
    </template>
  </f-dropdown>
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
