<script lang="ts" setup>
  import { FIconApps, FIconBlock, FIconCameraVideoSlash, FIconClock } from '@fighting-design/fighting-icon'

</script>

<template>
  <!-- <f-image width="200px" src="https://tianyuhao.cn/images/auto/1.jpg" /> -->

  <f-fighting-global type="primary" size="mini">
    <f-alert title="Hello~">今天代码写的很愉快！</f-alert>
    <!-- <f-alert type="success" title="标题">心情很不错</f-alert> -->

    <f-text type="default">普通文字</f-text>
    <f-text>普通文字</f-text>
    <f-text>普通文字</f-text>

    <f-button>默认按钮</f-button>
    <f-button>主要按钮</f-button>
    <f-button>成功按钮</f-button>
    <f-button>危险按钮</f-button>
    <f-button>警告按钮</f-button>

    <f-button-group direction="horizontal" size="middle">
      <f-button type="primary">左边的</f-button>
      <f-button type="primary">中间的</f-button>
      <f-button type="primary">右边的</f-button>
    </f-button-group>

    <f-button simple type="default">默认按钮</f-button>
    <f-button simple type="primary">主要按钮</f-button>
    <f-button simple type="success">成功按钮</f-button>
    <f-button simple type="danger">危险按钮</f-button>
    <f-button simple type="warning">警告按钮</f-button>
  </f-fighting-global>

  <h3>水平的</h3>
  <f-menu active-name="1">
    <template #before>
      <!-- <f-avatar
        round
        src="https://tianyuhao.cn/images/fighting-design/FightingDesign.svg"
        size="mini"
      /> -->
    </template>

    <f-menu-item name="1" :icon="FIconApps">首页</f-menu-item>
    <f-menu-item name="2" :icon="FIconApps">设置</f-menu-item>
    <f-menu-item name="3" :icon="FIconApps">首页</f-menu-item>

    <f-submenu>
      <template #title> 选项列表 </template>
      <f-menu-item name="4-1" :icon="FIconBlock">选项</f-menu-item>
      <f-menu-item name="4-2" :icon="FIconCameraVideoSlash">设置</f-menu-item>
      <f-menu-item name="4-3" :icon="FIconClock">操作</f-menu-item>
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
  <div
    :style="{
      height: '2000px'
    }"
  >
    1
  </div>
  <br />
  <br />

  <h3>垂直的</h3>
  <f-menu mode="vertical" active-name="1">
    <template #before>
      <h1>123</h1>
    </template>

    <f-menu-item disabled name="1" :icon="FIconApps">首页</f-menu-item>
    <f-menu-item name="2" :icon="FIconApps">设置</f-menu-item>
    <f-menu-item name="3" :icon="FIconApps">首页</f-menu-item>

    <f-submenu>
      <template #title> 选项列表 </template>
      <f-menu-item name="4-1" :icon="FIconBlock">选项</f-menu-item>
      <f-menu-item name="4-2" :icon="FIconCameraVideoSlash">设置</f-menu-item>
      <f-menu-item name="4-3" :icon="FIconClock">操作</f-menu-item>
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

  <h3>内联的</h3>

  <f-menu mode="inline" active-name="2-1">
    <template #before>
      <h1>123</h1>
    </template>

    <f-menu-item name="1" :icon="FIconApps">首页</f-menu-item>
    <f-submenu>
      <template #title> 选项列表 </template>
      <f-menu-item name="2-1" :icon="FIconBlock">选项</f-menu-item>
      <f-menu-item name="2-2" :icon="FIconCameraVideoSlash">设置</f-menu-item>
      <f-menu-item name="2-3" :icon="FIconClock">操作</f-menu-item>
    </f-submenu>

    <f-menu-item-group title="下拉列表">
      <f-menu-item name="2-1" :icon="FIconBlock">选项</f-menu-item>
      <f-menu-item name="2-2" :icon="FIconCameraVideoSlash">设置</f-menu-item>
      <f-menu-item name="2-3" :icon="FIconClock">操作</f-menu-item>

      <f-menu-item-group title="下拉列表">
        <f-menu-item name="2-1" :icon="FIconBlock">选项</f-menu-item>
        <f-menu-item name="2-2" :icon="FIconCameraVideoSlash">设置</f-menu-item>
        <f-menu-item name="2-3" :icon="FIconClock">操作</f-menu-item>
      </f-menu-item-group>
    </f-menu-item-group>

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
</template>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  h3 {
    border-bottom: 1px solid skyblue;
  }
</style>
