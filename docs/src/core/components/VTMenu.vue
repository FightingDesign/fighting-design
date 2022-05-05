<script lang="ts" setup>
import { MenuItem, MenuItemChild } from '../types/menu'
import VTMenuLink from './VTMenuLink.vue'
import VTMenuGroup from './VTMenuGroup.vue'

defineProps<{
  items?: (MenuItem | MenuItemChild)[]
}>()
</script>

<template>
  <div class="vt-menu">
    <div v-if="items" class="vt-menu-items">
      <template v-for="item in items" :key="item.text">
        <VTMenuLink v-if="'link' in item" :item="item" />
        <VTMenuGroup v-else :text="item.text" :items="item.items" />
      </template>
    </div>

    <slot />
  </div>
</template>
