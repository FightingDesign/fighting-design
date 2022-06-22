<template>
  <div class="vt-menu-group">
    <p v-if="text" class="vt-menu-group-title">{{ text }}</p>

    <template v-for="(item, index) in items" :key="index">
      <v-t-menu-link v-if="'link' in item" :item="item" />
    </template>
  </div>
</template>

<script lang="ts" setup>
  import type { MenuItemChild } from '../types/menu'
  import VTMenuLink from './VTMenuLink.vue'

  defineProps<{
    text?: string
    items: MenuItemChild[]
  }>()
</script>
