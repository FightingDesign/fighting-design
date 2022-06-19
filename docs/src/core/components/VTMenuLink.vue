<template>
  <v-t-link class="vt-menu-link" :href="item.link">
    {{ item.text }}
  </v-t-link>
</template>

<script lang="ts" setup>
  import VTLink from './VTLink.vue'
  import type { MenuItemWithLink } from '../types/menu'

  defineProps<{ item: MenuItemWithLink }>()
</script>
