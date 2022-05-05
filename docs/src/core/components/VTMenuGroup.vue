<script lang="ts" setup>
import { MenuItemChild } from '../types/menu'
import VTMenuLink from './VTMenuLink.vue'

defineProps<{
  text?: string
  items: MenuItemChild[]
}>()
</script>

<template>
  <div class="vt-menu-group">
    <p v-if="text" class="vt-menu-group-title">{{ text }}</p>

    <template v-for="item in items">
      <VTMenuLink v-if="'link' in item" :item="item" />
    </template>
  </div>
</template>
