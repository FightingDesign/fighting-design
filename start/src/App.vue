<script lang="ts" setup>
  import { ref } from 'vue'
  import {
    FIconApps,
    FIconBlock,
    FIconCameraVideoSlash,
    FIconClock
  } from '@fighting-design/fighting-icon'

  const value = ref(true)

  const current = ref(1)
  const total = ref(100)
</script>

<template>
  <f-space vertical>
    <f-button-group direction="horizontal">
      <f-button type="primary">左边的</f-button>
      <f-button type="primary">中间的</f-button>
      <f-button type="primary">右边的</f-button>
    </f-button-group>

    <f-button-group direction="vertical">
      <f-button type="primary">上边的</f-button>
      <f-button type="primary">中间的</f-button>
      <f-button type="primary">下边的</f-button>
    </f-button-group>
  </f-space>

  <!-- <f-pagination v-model:current="current" :total="total" />
  <f-pagination v-model:current="current" background :total="total" /> -->

  <!-- <f-switch v-model="value" /> -->

  <f-menu mode="horizontal">
    <template #before>
      <f-avatar
        round
        src="https://tianyuhao.cn/images/fighting-design/FightingDesign.svg"
        size="mini"
      />
    </template>

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

  <f-menu mode="vertical">
    <template #before>
      <f-avatar
        round
        src="https://tianyuhao.cn/images/fighting-design/FightingDesign.svg"
        size="mini"
      />
    </template>

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

  <!-- <f-menu :mode="value ? 'vertical' : 'horizontal'"> -->
  <f-menu mode="inline">
    <template #before>
      <f-avatar
        round
        src="https://tianyuhao.cn/images/fighting-design/FightingDesign.svg"
        size="mini"
      />
    </template>

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
</template>
