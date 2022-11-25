<script lang="ts" setup></script>

<template>
  <f-menu>
    <template #logo>
      <f-avatar
        round
        src="https://tianyuhao.cn/images/fighting-design/FightingDesign.svg"
        size="mini"
      />
    </template>

    <f-menu-item>首页</f-menu-item>
    <f-menu-item>选项</f-menu-item>
    <f-menu-item>设置</f-menu-item>
    <f-menu-item>操作</f-menu-item>

    <template #option>
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
</template>
