<template>
  <nav v-if="config.nav" class="VPNavBarMenu">
    <template v-for="(item, index) in config.nav" :key="index">
      <v-p-nav-bar-menu-link v-if="'link' in item" :item="item" />
      <v-p-nav-bar-menu-group v-else :item="item" />
    </template>
  </nav>
</template>

<script lang="ts" setup>
  import { useConfig } from '../composables/config'
  import VPNavBarMenuLink from './VPNavBarMenuLink.vue'
  import VPNavBarMenuGroup from './VPNavBarMenuGroup.vue'

  const { config } = useConfig()
</script>

<style scoped>
  .VPNavBarMenu {
    display: none;
  }

  @media (min-width: 768px) {
    .VPNavBarMenu {
      display: flex;
    }
  }
</style>
