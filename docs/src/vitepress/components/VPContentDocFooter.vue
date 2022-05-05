<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { getSidebar } from '../support/sidebar'
import { SidebarGroup } from '../config'
import { isActive, normalizeLink } from '../support/utils'
import {
  VTIconChevronLeft,
  VTIconChevronRight,
  MenuItemWithLink
} from '../../core'

const { page, theme } = useData()

const links = computed(() => {
  const sidebar = getSidebar(theme.value.sidebar, page.value.relativePath)
  const candidates = getFlatSideBarLinks(sidebar)
  const index = candidates.findIndex((link) =>
    isActive(page.value.relativePath, link.link)
  )
  return {
    prev: candidates[index - 1],
    next: candidates[index + 1]
  }
})

function getFlatSideBarLinks(sidebar: SidebarGroup[]): MenuItemWithLink[] {
  const links: MenuItemWithLink[] = []
  for (const group of sidebar) {
    for (const link of group.items) {
      links.push(link)
    }
  }
  return links
}
</script>

<template>
  <footer v-if="links.prev || links.next" class="VPContentDocFooter">
    <a
      v-if="links.prev"
      class="prev-link"
      :href="normalizeLink(links.prev.link)"
    >
      <span class="desc"
        ><VTIconChevronLeft class="vt-link-icon" /> Previous</span
      >
      <span class="title">{{ links.prev.text }} </span>
    </a>
    <a
      v-if="links.next"
      class="next-link"
      :href="normalizeLink(links.next.link)"
    >
      <span class="desc">Next <VTIconChevronRight class="vt-link-icon" /></span>
      <span class="title">{{ links.next.text }}</span>
    </a>
  </footer>
</template>

<style scoped>
.VPContentDocFooter {
  border-top: 1px solid var(--vt-c-divider-light);
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
}

a {
  display: inline-block;
  font-weight: 500;
  font-size: 16px;
  max-width: 48%;
}

.desc {
  font-size: 11px;
  color: var(--vt-c-text-2);
  display: block;
}

.title {
  color: var(--vt-c-brand);
  transition: color 0.25s;
}

a:hover .title {
  color: var(--vt-c-brand-highlight);
}

.next-link {
  margin-left: auto;
  text-align: right;
}

.vt-link-icon {
  margin: -2px 0 0;
  vertical-align: middle;
}
</style>
