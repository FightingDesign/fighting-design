<template>
  <a
    :class="{ link: true, active: isActive(page.relativePath, item.link) }"
    :href="item.link"
    @click="closeSideBar"
  >
    <p class="link-text">{{ item.text }}</p>
  </a>
</template>

<script lang="ts" setup>
  import { useData } from 'vitepress'
  import { inject } from 'vue'
  import type { MenuItemWithLink } from '../../core'
  import { isActive } from '../support/utils'

  defineProps<{
    item: MenuItemWithLink
  }>()

  const { page } = useData()
  const closeSideBar = inject('close-sidebar') as () => void
</script>

<style scoped>
  .link {
    display: block;
  }

  .link .link-text {
    padding: 6px 10px;
    border-left: 4px solid transparent;
    border-radius: 4px;
  }

  .link:hover .link-text {
    color: var(--vt-c-brand-text-1);
    transition: 0.25s;
  }

  .link.active .link-text {
    font-weight: 600;
    color: #2d5af1;
    background: rgba(45, 90, 241, 0.1);
    padding: 6px 10px;
    transition: 0.25s;
    border-left: 4px solid #2d5af1;
    border-radius: 4px;
  }

  .link-text {
    line-height: 20px;
    font-size: 13px;
    font-weight: 500;
    color: var(--vt-c-text-2);
    transition: color 0.5s;
  }
</style>
