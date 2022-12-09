<script lang="ts" setup>
  import {
    FIconApps,
    FIconBlock,
    FIconCameraVideoSlash,
    FIconClock
  } from '@fighting-design/fighting-icon'

  const sizeToNum = (size: string | number): number => {
    if (!size) return 0
    if (typeof size === 'number') return size
    return Number.parseFloat(size) || 0
  }

  const load = e => console.log(e)
  const error = e => console.log(e)

  console.log(sizeToNum(-1))
</script>

<template>
  <f-list
    size="large"
    center
    border-color="orange"
    zebra
    zebra-color="red"
    text-color="#fff"
  >
    <template #header>
      <h1>头部信息</h1>
      <h1>头部信息</h1>
    </template>
    <f-list-item>这是大号尺寸列表这表</f-list-item>
    <f-list-item>这是大号尺寸列表这表</f-list-item>
    <f-list-item>这是大号尺寸列表这表</f-list-item>
    <f-list-item>这是大号尺寸列表这表</f-list-item>
    <f-list-item>这是大号尺寸列表这表</f-list-item>
    <f-list-item>这是大号尺寸列表这表</f-list-item>
    <f-list-item>这是大号尺寸列表</f-list-item>

    <template #footer>
      <h1>头部信息</h1>
      <h1>头部信息</h1>
    </template>
  </f-list>

  <f-list size="middle">
    <f-list-item>这是中号尺寸列表</f-list-item>
    <f-list-item>这是中号尺寸列表</f-list-item>
  </f-list>

  <f-list size="small">
    <f-list-item>这是小号尺寸列表</f-list-item>
    <f-list-item>这是小号尺寸列表</f-list-item>
  </f-list>

  <f-list size="mini">
    <f-list-item>这是超级小号尺寸列表</f-list-item>
    <f-list-item>这是超级小号尺寸列表</f-list-item>
  </f-list>

  <div
    :style="{
      height: '2000px'
    }"
  >
    1
  </div>
  <f-image
    lazy
    width="200px"
    src="https://tianyuhao.cn/images/auto/1.jpg"
    :root-margin="-300"
  />

  <f-avatar
    src="https://tianyuhao.cn/2images/auto/my.jpg"
    err-src="https://tianyuhao.cn/images/auto/my.jpg"
    :on-load="load"
    :on-error="error"
  />
  <!-- <f-avatar round src="https://tianyuhao.cn/images/auto/my.jpg" /> -->

  <!-- <f-menu mode="inline"> -->
  <!-- <f-menu mode="vertical"> -->
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
  body {
    /* background: red; */
  }
  * {
    margin: 0;
    padding: 0;
  }
  h3 {
    border-bottom: 1px solid skyblue;
  }

  .f-list {
    margin-bottom: 20px !important;
  }
</style>
