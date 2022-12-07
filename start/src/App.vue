<script lang="ts" setup>
  import {
    FIconApps,
    FIconBlock,
    FIconCameraVideoSlash,
    FIconClock
  } from '@fighting-design/fighting-icon'
</script>

<template>
  <!-- <f-menu mode="inline"> -->
  <f-menu mode="vertical">
    <template #before>
      <f-avatar
        round
        src="https://tianyuhao.cn/images/fighting-design/FightingDesign.svg"
        size="mini"
      />
    </template>

    <f-menu-item :icon="FIconApps">首页</f-menu-item>
    <f-submenu>
      <template #title> 选项列表 </template>
      <f-menu-item :icon="FIconBlock">选项</f-menu-item>
      <f-menu-item :icon="FIconCameraVideoSlash">设置</f-menu-item>
      <f-menu-item :icon="FIconClock">操作</f-menu-item>
    </f-submenu>

    <template #after>
      <f-dropdown>
        <f-button>设置</f-button>

        <template #content>
          <f-dropdown-item>猕猴桃</f-dropdown-item>
          <f-dropdown-item>哈密瓜</f-dropdown-item>
          <f-dropdown-item>火龙果</f-dropdown-item>
          <f-dropdown-item>柠檬</f-dropdown-item>
        </template>
      </f-dropdown>
    </template>
  </f-menu>

  <br />
  <br />
  <br />
  <br />

  <f-menu mode="inline">
    <f-menu-item :icon="FIconApps">首页</f-menu-item>
    <f-submenu>
      <template #title> 选项列表 </template>
      <f-menu-item :icon="FIconBlock">选项</f-menu-item>
      <f-menu-item :icon="FIconCameraVideoSlash">设置</f-menu-item>
      <f-menu-item :icon="FIconClock">操作</f-menu-item>
    </f-submenu>
  </f-menu>
</template>
