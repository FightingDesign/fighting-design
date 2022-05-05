<script lang="ts" setup>
import { VTFlyout } from '../../core'
import { isActive } from '../support/utils'
import { useData } from 'vitepress'
import { NavItemWithChildren } from '../config'

defineProps<{
  item: NavItemWithChildren
}>()

const { page } = useData()
</script>

<template>
  <VTFlyout
    :class="{
      VPNavBarMenuGroup: true,
      active: isActive(page.relativePath, item.activeMatch, true)
    }"
    :button="item.text"
    :items="item.items"
  />
</template>

<style scoped>
.VPNavBarMenuGroup.active {
  border-bottom: 1px solid var(--vt-c-brand);
  height: var(--vt-nav-height);
}
</style>
