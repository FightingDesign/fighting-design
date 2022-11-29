<script lang="ts" setup>
  import { ref } from 'vue'
  import {
    FIconApps,
    FIconBlock,
    FIconCameraVideoSlash,
    FIconClock
  } from '@fighting-design/fighting-icon'

  const open2 = ref(false)
</script>

<template>
  <f-sticky-card :open="open2">
    <template #source>
      <h1>1212121</h1>
      <h1>1212121</h1>
      <h1>1212121</h1>
    </template>

    <h1>Hello World！</h1>
    <h1>Hello World！</h1>
    <h1>Hello World！</h1>
    <h1>Hello World！</h1>
    <h1>Hello World！</h1>
    <h1>Hello World！</h1>
    <h1>Hello World！</h1>
    <h1>Hello World！</h1>
  </f-sticky-card>

  <f-menu mode="inline">
    <f-submenu>
      <template #title>这是标题</template>

      <f-menu-item :icon="FIconCameraVideoSlash">设置</f-menu-item>
      <f-menu-item-group title="第一组">
        <f-menu-item :icon="FIconApps">首页</f-menu-item>
        <f-menu-item :icon="FIconBlock">选项</f-menu-item>
      </f-menu-item-group>
    </f-submenu>

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
  </f-menu>

  <!-- <f-menu mode="horizontal">

    <f-submenu>
      <template #title>这是标题</template>

      <f-menu-item :icon="FIconCameraVideoSlash">设置</f-menu-item>
      <f-menu-item-group title="第一组">
        <f-menu-item :icon="FIconApps">首页</f-menu-item>
        <f-menu-item :icon="FIconBlock">选项</f-menu-item>
      </f-menu-item-group>
    </f-submenu>

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

  <!--   <f-menu mode="vertical">
   <f-submenu>
      <template #title>这是标题</template>

      <f-menu-item :icon="FIconCameraVideoSlash">设置</f-menu-item>
      <f-menu-item-group title="第一组">
        <f-menu-item :icon="FIconApps">首页</f-menu-item>
        <f-menu-item :icon="FIconBlock">选项</f-menu-item>
      </f-menu-item-group>
    </f-submenu>

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

  <!-- 
  <div style="padding: 0 100px">
    <f-slider
      v-model="value1"
      :step="5"
      :min="0"
      :max="20"
      :disabled="disabled"
    ></f-slider>
    <br />
    <br />
    <f-slider
      v-model="value2"
      :step="5"
      :min="0"
      :max="20"
      :disabled="disabled"
    ></f-slider>
    <br />
    <br />
    <button @click="disabled = !disabled">禁用</button>
  </div> -->
  <!-- </f-menu> -->
</template>
