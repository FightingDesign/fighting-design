<script lang="ts" setup>
import { VTLink } from '../../core'
import { useData } from 'vitepress'
import { isActive } from '../support/utils'
import { NavItemWithLink } from '../config'

defineProps<{
  item: NavItemWithLink
}>()

const { page } = useData()
</script>

<template>
  <VTLink
    :class="{
      VPNavBarMenuLink: true,
      active: isActive(
        page.relativePath,
        item.activeMatch || item.link,
        !!item.activeMatch
      )
    }"
    :href="item.link"
    :noIcon="true"
  >
    {{ item.text }}
  </VTLink>
</template>

<style scoped>
.VPNavBarMenuLink {
  display: block;
  padding: 0 12px;
  line-height: calc(var(--vt-nav-height) - 1px);
  font-size: 13px;
  font-weight: 500;
  color: var(--vt-c-text-1);
  transition: color 0.25s;
}

.VPNavBarMenuLink.active {
  border-bottom: 1px solid var(--vt-c-brand);
}

.VPNavBarMenuLink:hover {
  color: var(--vt-c-brand);
}
</style>
