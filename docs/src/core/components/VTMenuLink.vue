<template>
  <VTLink class="vt-menu-link" :href="item.link">
    {{ item.text }}
  </VTLink>
</template>

<script lang="ts" setup>
import VTLink from './VTLink.vue'
import { MenuItemWithLink } from '../types/menu'

defineProps<{ item: MenuItemWithLink }>()
</script>
