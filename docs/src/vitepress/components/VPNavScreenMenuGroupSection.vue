<template>
  <div class="VPNavScreenMenuGroupSection">
    <p v-if="text" class="title">{{ text }}</p>
    <v-p-nav-screen-menu-group-link
      v-for="item in items"
      :key="item.text"
      :text="item.text"
      :link="item.link"
    />
  </div>
</template>

<script lang="ts" setup>
  import type { MenuItemWithLink } from '../../core'
  import VPNavScreenMenuGroupLink from './VPNavScreenMenuGroupLink.vue'

  defineProps<{
    text?: string
    items: MenuItemWithLink[]
  }>()
</script>

<style scoped>
  .VPNavScreenMenuGroupSection {
    display: block;
  }

  .title {
    line-height: 32px;
    font-size: 11px;
    font-weight: 700;
    color: var(--vt-c-text-2);
    text-transform: uppercase;
    transition: color 0.25s;
  }
</style>
