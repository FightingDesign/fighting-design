<script lang="ts" setup>
  // import { FIconApps, FIconBlock, FIconCameraVideoSlash, FIconClock } from '@fighting-design/fighting-icon'
  import { accessRoutes } from './router/index'
  import { computed } from 'vue'

  // 链管理平台
  const menu1 = computed(() => {
    const path = '/app/among'
    return accessRoutes.filter(item => {
      return item.path.slice(0, path.length) !== path
    })
  })

  // 数链中间件
  const menu2 = computed(() => {
    const path = '/app/among'
    return accessRoutes.filter(item => {
      return item.path.slice(0, path.length) === path
    })
  })

  const onMenuItemClick = (evt: MouseEvent, name: string): void => {
    console.log(evt, 'app', name)
  }

  const onSubMenuClick = (evt: MouseEvent, target: boolean): void => {
    console.log(evt, target)
  }
</script>

<template>
  <f-menu active-name="1" mode="inline" :on-menu-item-click="onMenuItemClick" :on-sub-menu-click="onSubMenuClick">
    <!-- 链管理平台 -->
    <f-submenu>
      <template #title>链管理平台</template>

      <div v-for="(item, index) in menu1" :key="index">
        <template v-if="!item.children">
          <f-menu-item :name="item.path">{{ item.meta.title }}</f-menu-item>
        </template>

        <template v-else>
          <f-submenu>
            <template #title>{{ item.meta.title }}</template>
            <f-menu-item v-for="(itemItem, j) in item.children" :key="j" :name="itemItem.path">
              {{ itemItem.meta.title }}
            </f-menu-item>
          </f-submenu>
        </template>
      </div>
    </f-submenu>

    <!-- 数链中间件 -->
    <f-submenu>
      <template #title>数链中间件</template>

      <div v-for="(item, index) in menu2" :key="index">
        <template v-if="!item.children">
          <f-menu-item :name="item.path">{{ item.meta.title }}</f-menu-item>
        </template>

        <template v-else>
          <f-submenu>
            <template #title>{{ item.meta.title }}</template>
            <f-menu-item v-for="(itemItem, i) in item.children" :key="i" :name="itemItem.path">
              {{ itemItem.meta.title }}
            </f-menu-item>
          </f-submenu>
        </template>
      </div>
    </f-submenu>
  </f-menu>
</template>
