<script lang="ts" setup>
  import {
    FIconApps,
    FIconBlock,
    FIconCameraVideoSlash
  } from '@fighting-design/fighting-icon'
  import type { MenuItemClick } from 'fighting-design'

  /**
   * 点击菜单栏的每一项触发
   *
   * @param evt
   * @param name
   */
  const menuItemClick: MenuItemClick = (name: string, evt: MouseEvent) => {
    console.log(evt, name)
  }
</script>

<template>
  <div class="main">
    <!-- 左侧 -->
    <div class="aside-left">
      <f-menu mode="inline" active-name="/main/home" :on-menu-item-click="menuItemClick">
        <f-menu-item name="/main/home" :icon="FIconApps">首页</f-menu-item>
        <f-submenu>
          <template #title>沟通管理</template>
          <f-menu-item name="/communicate/message" :icon="FIconBlock">
            信件沟通记录
          </f-menu-item>
          <f-menu-item name="/communicate/unread" :icon="FIconCameraVideoSlash">
            医生未读信件
          </f-menu-item>
        </f-submenu>
        <f-submenu>
          <template #title>用户管理</template>
          <f-menu-item name="/users/doctor" :icon="FIconBlock"> 医生管理 </f-menu-item>
          <f-menu-item name="/users/patient" :icon="FIconCameraVideoSlash">
            患者管理
          </f-menu-item>
        </f-submenu>
        <f-submenu>
          <template #title>订单管理</template>
          <f-menu-item name="/transaction/list" :icon="FIconBlock">
            订单列表
          </f-menu-item>
        </f-submenu>
      </f-menu>
    </div>
    <!-- 中间的 -->
    <div class="aside-center">
      <f-card round> </f-card>
    </div>
    <!-- 右侧的 -->
    <div class="aside-right">
      <!-- 头像 -->
      <f-tooltip content="查看资料" position="left">
        <f-avatar
          src="https://finecare-fxk.fxkang.com/assis/new-aie-user/avatar_user_default_1.png"
          round
          size="mini"
          fit="cover"
        />
      </f-tooltip>
    </div>
  </div>
</template>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  .main {
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: #e9eefd;

    .aside-left {
      width: 200px;
      height: 100vh;
      background-color: #fff;
      border-radius: 0 25px 25px 0;
      overflow: hidden;
    }

    .aside-center {
      flex: 1;
      padding: 20px;
      box-sizing: border-box;
      max-height: 100vh;
      overflow-y: auto;
      overflow-x: hidden;

      &::-webkit-scrollbar {
        width: 0;
      }

      &::-webkit-scrollbar-thumb,
      &::-webkit-scrollbar-track {
        background-color: transparent;
      }
    }

    .aside-right {
      width: 60px;
      height: 100vh;
      background-color: #2d5af1;
      border-radius: 25px 0 0 25px;
      padding: 25px 0;
      box-sizing: border-box;
      flex-shrink: 0;
      display: flex;
      justify-content: center;
    }
  }
</style>
