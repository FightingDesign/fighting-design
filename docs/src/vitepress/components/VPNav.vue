<template>
  <header class="VPNav nav-bar" :class="{ stick: !hasSidebar }">
    <v-p-nav-bar :is-screen-open="isScreenOpen" @toggle-screen="toggleScreen">
      <template #navbar-title>
        <slot name="navbar-title" />
      </template>
    </v-p-nav-bar>
    <v-p-nav-screen :open="isScreenOpen" />
  </header>
</template>

<script setup lang="ts">
  import { useNav } from '../composables/nav'
  import { useSidebar } from '../composables/sidebar'
  import VPNavBar from './VPNavBar.vue'
  import VPNavScreen from './VPNavScreen.vue'
  import { provide } from 'vue'

  const { isScreenOpen, closeScreen, toggleScreen } = useNav()
  const { hasSidebar } = useSidebar()

  provide('close-screen', closeScreen)
</script>

<style scoped>
  .VPNav {
    position: relative;
    top: 0;
    left: 0;
    z-index: var(--vp-z-index-nav);
    z-index: 999;
  }

  @media (min-width: 960px) {
    .VPNav {
      position: fixed;
      top: var(--vt-banner-height, 0px);
      width: 100%;
    }
  }
</style>
