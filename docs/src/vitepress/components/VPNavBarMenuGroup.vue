<template>
  <v-t-flyout
    :class="{
      VPNavBarMenuGroup: true,
      active: isActive(page.relativePath, item.activeMatch, true)
    }"
    :button="item.text"
    :items="item.items"
  />
</template>

<script lang="ts" setup>
  import { VTFlyout } from '../../core'
  import { isActive } from '../support/utils'
  import { useData } from 'vitepress'
  import type { NavItemWithChildren } from '../config'

  defineProps<{
    item: NavItemWithChildren
  }>()

  const { page } = useData()
</script>

<style scoped>
  .VPNavBarMenuGroup.active {
    border-bottom: 1px solid var(--vt-c-brand);
    height: var(--vt-nav-height);
  }
</style>
