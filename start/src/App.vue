<script lang="ts" setup></script>

<template>
  <f-dropdown>
    <f-avatar round src="https://tianyuhao.cn/images/auto/my.jpg" />

    <template #content>
      <f-dropdown-item>猕猴桃</f-dropdown-item>
      <f-dropdown-item>哈密瓜</f-dropdown-item>
      <f-dropdown-item>火龙果</f-dropdown-item>
      <f-dropdown-item>柠檬</f-dropdown-item>
    </template>
  </f-dropdown>

  <f-dropdown trigger="click">
    <f-avatar round src="https://tianyuhao.cn/images/auto/my.jpg" />

    <template #content>
      <f-dropdown-item>猕猴桃</f-dropdown-item>
      <f-dropdown-item>哈密瓜</f-dropdown-item>
      <f-dropdown-item>火龙果</f-dropdown-item>
      <f-dropdown-item>柠檬</f-dropdown-item>
    </template>
  </f-dropdown>

  <f-trigger trigger="hover">
    <f-button type="primary">hover 触发</f-button>

    <template #content>
      <f-empty content="在这里，后续提供更多服务" />
    </template>
  </f-trigger>

  <f-trigger trigger="click" style="margin-left: 120px">
    <f-button type="primary">click 触发</f-button>

    <template #content>
      <f-empty content="在这里，后续提供更多服务" />
    </template>
  </f-trigger>
</template>
