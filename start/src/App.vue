<script lang="ts" setup>
  import { ref } from 'vue'
  import {
    FIconApps,
    FIconBlock,
    FIconCameraVideoSlash,
    FIconClock
  } from '@fighting-design/fighting-icon'
  import { FMessage } from '@/index'

  const handleClick = ({ index, evt }) => {
    FMessage.primary(`index：${index} evt：${evt}`)
  }

  const value3 = ref(true)

  const current = ref(1)
  const total = ref(100)

  const typeList = ref(['default', 'primary', 'success', 'danger', 'warning'])
</script>

<template>
  <h1>123122</h1>

  <f-ripple v-for="(item, i) in typeList" :key="i" :type="item">
    <div class="list">
      <f-text :type="item">{{ item }} 涟漪</f-text>
    </div>
  </f-ripple>

  <f-button type="primary">主要按钮</f-button>
  <f-button type="success" ripples>涟漪效果</f-button>
  <f-button type="warning" ripples>点我试试</f-button>
  <f-button type="danger" ripples simple>看看我</f-button>
  <f-button type="success" text ripples ripples-color="green">
    自定义涟漪颜色
  </f-button>

  <f-button font-color="#fff" color="#ff0de5" round>自定义颜色</f-button>
  <f-button font-color="#fff" color="#22c1c3">loading</f-button>

  <f-svg-icon :icon="FIconCameraVideoSlash" color="red" size="30px" />

  <f-pagination v-model:current="current" background disabled :total="total" />
  <f-pagination v-model:current="current" :total="total" />

  <f-breadcrumb
    font-size="20px"
    font-color="red"
    :icon-color="value3 ? 'blue' : 'black'"
  >
    <f-breadcrumb-item
      font-color="black"
      :to="{ name: 'home', query: { id: 123 } }"
    >
      首页
    </f-breadcrumb-item>
    <f-breadcrumb-item :to="{ name: 'abc' }">文章</f-breadcrumb-item>
    <f-breadcrumb-item :to="{ name: 'app' }">列表</f-breadcrumb-item>
  </f-breadcrumb>

  <f-switch v-model="value3" :icon="FIconCameraVideoSlash" />

  <f-toolbar
    :on-click="handleClick"
    fixed
    round
    text-color="red"
    background="black"
    width="200px"
    height="50px"
  >
    <f-toolbar-item index="1" :icon="FIconApps" />
    <f-toolbar-item index="2" :icon="FIconBlock" />
    <f-toolbar-item index="3" :icon="FIconCameraVideoSlash" />
    <f-toolbar-item index="4" :icon="FIconClock" />
  </f-toolbar>
  <!-- <f-menu>
    <template #before>
      <f-avatar
        round
        src="https://tianyuhao.cn/images/fighting-design/FightingDesign.svg"
        size="mini"
      />
    </template>

    <f-menu-item :icon="FIconApps">首页</f-menu-item>
    <f-menu-item :icon="FIconBlock">选项</f-menu-item>
    <f-menu-item :icon="FIconCameraVideoSlash">设置</f-menu-item>
    <f-menu-item :icon="FIconClock">操作</f-menu-item>

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
  </f-menu> -->

  <!-- <br /> -->

  <f-menu mode="inline" active-name="2" accordion>
    <f-submenu name="1">
      <template #title>这是标题</template>

      <f-menu-item name="1-1" :icon="FIconCameraVideoSlash">设置</f-menu-item>
      <f-menu-item-group title="第1组">
        <f-menu-item name="1-2" :icon="FIconApps">首页</f-menu-item>
        <f-menu-item name="1-3" :icon="FIconBlock">选项</f-menu-item>
      </f-menu-item-group>

      <f-menu-item-group title="第2组">
        <f-menu-item name="1-4" :icon="FIconApps">首页222</f-menu-item>
        <f-menu-item name="1-5" :icon="FIconBlock">选项222</f-menu-item>
      </f-menu-item-group>
    </f-submenu>

    <f-menu-item name="2" :icon="FIconClock">操作系统</f-menu-item>

    <f-submenu name="3">
      <template #title>
        <f-svg-icon :icon="FIconCameraVideoSlash" />
        应用管理
      </template>
      <f-menu-item disabled to="/home" name="3-1" :icon="FIconClock">
        管理平台
      </f-menu-item>
      <f-menu-item name="3-2" :icon="FIconClock">上链应用</f-menu-item>
    </f-submenu>
  </f-menu>
</template>

<style scoped>
  .list {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
