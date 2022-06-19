<template>
  <div class="vt-menu">
    <div v-if="items" class="vt-menu-items">
      <template v-for="item in items" :key="item.text">
        <v-t-menu-link v-if="'link' in item" :item="item" />
        <v-t-menu-group v-else :text="item.text" :items="item.items" />
      </template>
    </div>

    <slot />
  </div>
</template>

<script lang="ts" setup>
  import type { MenuItem, MenuItemChild } from '../types/menu'
  import VTMenuLink from './VTMenuLink.vue'
  import VTMenuGroup from './VTMenuGroup.vue'

  defineProps<{
    items?: (MenuItem | MenuItemChild)[]
  }>()
</script>
